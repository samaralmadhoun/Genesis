import React, { useState } from 'react';

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-section">
      <div className="navbar-container">
        
        <div className="nav-brand">
          <div className="logo-g">
            <img src="/logo.jpg" alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '4px' }} />
          </div>
          <span>Genesis</span>
        </div>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
        </nav>

        <div className="nav-action">
          <button className="nav-btn">Get Started</button>
        </div>

        <div className="menu" onClick={toggleMenu}>
  {isOpen ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )}
</div>
</div>
    </header>
  );
}
