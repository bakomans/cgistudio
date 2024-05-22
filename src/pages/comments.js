import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '' && username.trim() !== '') {
      setComments([...comments, { username, comment: newComment, rating }]);
      setNewComment('');
      setUsername('');
      setRating(0);
    }
  };

  const renderStars = (rating, setRating) => {
    return (
      <div className="flex">
        {[0, 1, 2, 3, 4].map((star) => (
          <svg
            key={star}
            className={`w-6 h-6 cursor-pointer ${star < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={() => setRating(star + 1)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.338 4.115a1 1 0 00.95.69h4.338c.967 0 1.371 1.24.588 1.81l-3.51 2.55a1 1 0 00-.364 1.118l1.338 4.115c.3.921-.755 1.688-1.539 1.118l-3.51-2.55a1 1 0 00-1.175 0l-3.51 2.55c-.784.57-1.839-.197-1.539-1.118l1.338-4.115a1 1 0 00-.364-1.118L2.124 9.542c-.784-.57-.38-1.81.588-1.81h4.338a1 1 0 00.95-.69l1.338-4.115z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Whats our Customers Say...</h2>
      <ul className="mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="mb-2 p-4 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-bold">{comment.username}</span>
              <div className="flex">
                {[0, 1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star < comment.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.338 4.115a1 1 0 00.95.69h4.338c.967 0 1.371 1.24.588 1.81l-3.51 2.55a1 1 0 00-.364 1.118l1.338 4.115c.3.921-.755 1.688-1.539 1.118l-3.51-2.55a1 1 0 00-1.175 0l-3.51 2.55c-.784.57-1.839-.197-1.539-1.118l1.338-4.115a1 1 0 00-.364-1.118L2.124 9.542c-.784-.57-.38-1.81.588-1.81h4.338a1 1 0 00.95-.69l1.338-4.115z" />
                  </svg>
                ))}
              </div>
            </div>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="flex flex-col">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="mb-2 p-2 border rounded-lg dark:bg-gray-900 dark:text-gray-300"
          placeholder="Your Name"
        />
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="mb-2 p-2 border rounded-lg dark:bg-gray-900 dark:text-gray-300"
          rows="4"
          placeholder="Write your comment here..."
        />
        <div className="mb-4">
          {renderStars(rating, handleRatingChange)}
        </div>
        <button
          type="submit"
          className="self-end py-2 px-6 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
