import React, { useState } from 'react';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={`min-h-screen flex justify-center   ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-lg p-4 ${darkMode ? 'bg-grey-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg`}>
        <button
          className="absolute top-4 right-4"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
        <Chat darkMode={darkMode} />
      </div>
    </div>


  );
}

export default App;
