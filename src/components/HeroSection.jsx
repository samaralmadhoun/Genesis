import React from 'react'
import { useEffect } from 'react';

function HeroSection() {

  useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show-on-scroll');
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll('.hidden-on-scroll');
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []);

  return (
    <section className="hero-section hidden-on-scroll">
      <div className="container">
        <span className="label">
          Smart, Fast, Always Active.
        </span>
        <button href="#">
          Launch App 
        </button>
      </div>

    <h1 className="title">
      Build, Deploy & Talk to AI <br /> Agents in Seconds.
    </h1>
    <p className="description">
      Design AI assistants that research, plan, and execute <br /> tasks — all powered by your prompts.
    </p>

    <div className="buttons">
      <button className="btn-create">
        Create Agent
      </button>
      <button className="btn-watch">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ marginRight: '8px', verticalAlign: 'middle' }}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            Watch Demo
          </button>
    </div>
    </section>
  )
}

export default HeroSection