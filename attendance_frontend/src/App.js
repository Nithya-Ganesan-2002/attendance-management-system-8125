import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

/**
 * PUBLIC_INTERFACE
 * App
 * Root component that sets up theme and renders the Dashboard page.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to <html> element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    /** Toggle between light and dark modes. */
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', background: 'transparent' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
