// LoginPage.js

import React, { useState } from 'react';
import Typewriter from './typeWrite';
import LoginForm from './LogIn';

const LoginPage = () => {
  const [translationCompleted, setTranslationCompleted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);



  const handleTranslationComplete = () => {
    setTranslationCompleted(true);
    setTimeout(() => setShowLogin(true), 750); // Add a 2-second delay before showing the login component

  };


  return (
    <div>
      <div className="Title">
        <h1>
          <Typewriter text="Welcome to CheckMate!" delay={100} onAnimationComplete={handleTranslationComplete} />
        </h1>
      </div>
      {translationCompleted && showLogin && (
        <>
       <h2 className='extra'>Let's Organise!</h2>
        <div className="LoginContainer">
          <LoginForm/>
        </div></>
       
      )}
    </div>
  );
};

export default LoginPage;
