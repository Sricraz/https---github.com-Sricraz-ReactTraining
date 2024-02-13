import React, { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div className='login'>
      <button className = "filter-btn-btns"onClick={handleLoginToggle}>
        {isLoggedIn ? 'Login' : 'Logout'}
      </button>
      {isLoggedIn && <p className='filter-btn-btns'>Logged in!</p>}

    </div>
  );
}

export default LoginButton;
