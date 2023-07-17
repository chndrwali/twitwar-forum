import React from 'react';

function LeaderboardTitle() {
  return (
    <header className="flex items-center bg-white my-7 rounded-md shadow-lg px-6 py-3">
      <p className="text-lg flex-1">User</p>
      <p className="text-right font-bold text-gray-600">Score</p>
    </header>

  );
}

export default LeaderboardTitle;