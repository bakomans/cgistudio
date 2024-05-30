// src/components/Comments.js
import React, { useState, useEffect } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { database } from '../firebaseConfig';
import ReactStars from 'react-rating-stars-component';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const commentsRef = ref(database, 'comments');
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const fetchedComments = Object.values(data);
        setComments(fetchedComments);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && newComment.trim() !== '') {
      const commentsRef = ref(database, 'comments');
      const comment = {
        name: name,
        text: newComment,
        rating: rating,
        timestamp: new Date().toISOString()
      };
      push(commentsRef, comment);
      setName('');
      setNewComment('');
      setRating(0);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <textarea
          className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment..."
        ></textarea>
        <ReactStars
          count={5}
          onChange={(newRating) => setRating(newRating)}
          size={24}
          activeColor="#ffd700"
          value={rating}
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
          Submit
        </button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md mb-2">
            <p className="text-gray-800 dark:text-gray-200"><strong>{comment.name}</strong></p>
            <p className="text-gray-800 dark:text-gray-200">{comment.text}</p>
            <div className="flex">
              <ReactStars
                count={5}
                value={comment.rating}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {new Date(comment.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
