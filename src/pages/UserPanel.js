import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';


const UserPanel = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Panel użytkownika</h1>
      {user ? (
        <p>Witaj, {user.email}. Tu możesz zobaczyć swoje zakupy i zarządzać kontem.</p>
      ) : (
        <p>Ładowanie...</p>
      )}
    </div>
  );
};

export default UserPanel;
