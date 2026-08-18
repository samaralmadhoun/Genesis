import React from 'react'
import { useEffect } from 'react';

function Details() {
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
    <section className="details-section hidden-on-scroll">
        <div className="center-line"></div>
        <div className="step-row">
            <div className="step-image">
                <img src="/workflow1.png" alt=""/>
            </div>
            <div className="step-content">
                <span className="step-number">01</span>
                <h2>Start with a prompt</h2>
                <p>
                  Start with a simple prompt describing what you want your agent to do. 
                  Our builder interprets your idea and creates the structure for you in seconds.
                </p>

                <a href="#learn-more" className="learn-more">
                  Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
            </div>
        </div>

        <div className="step-row reverse">
          <div className="step-image">
            <img src="/workflow3.jpg" alt=""/>
          </div>
          <div className="step-content">
            <span className="step-number">02</span>
            <h2>Adjust and personalize</h2>
            <p>
              Adjust tasks, actions and integrations. Add personality, rules and data sources 
              to make the agent work exactly the way you want.
            </p>
            <a href="#learn-more" className="learn-more">
              Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            </a>
          </div>
        </div>

        <div className="step-row">
          <div className="step-image">
            <img src="/workfllow2.jpg" alt=""/>
          </div>
          <div className="step-content">
            <span className="step-number">03</span>
            <h2>Launch & Automate</h2>
            <p>
              Deploy your agent and let it run. It executes tasks autonomously, reports results,
              and continues working in the background.
            </p>
            <a href="#learn-more" className="learn-more">
              Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            </a>
          </div>
        </div>
    </section>
  )
}

export default Details