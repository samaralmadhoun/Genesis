import React from 'react'
import { useEffect } from 'react';

function Action() {

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
    <section className='action-section hidden-on-scroll'>
        <div className="action-box">
        <h2>Ready to build?</h2>
        <p>See how fast you can turn your ideas into reality. Get started for free, no credit card required.</p>
        <button className="action-btn">
          Try now <span className="arrow"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span>
        </button>
        </div>
    </section>
  )
}

export default Action