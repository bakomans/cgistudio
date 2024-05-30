import React, { useState, useEffect } from 'react';

const CookiesConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookies-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('cookies-consent', consent);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p className="mr-4">
        This website uses cookies to ensure you get the best experience on our website.
      </p>
      <div>
        <button 
          onClick={() => handleConsent('accepted')} 
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-2"
        >
          Accept
        </button>
        <button 
          onClick={() => handleConsent('declined')} 
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookiesConsent;
