// OnlineStatusComponent.js
import React from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';
function OnlineStatusComponent() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>Online Status</h2>
      {isOnline ? (
        <p>Internet connection is available.</p>
      ) : (
        <p>Internet connection is not available.</p>
      )}
    </div>
  );
}

export default OnlineStatusComponent;
