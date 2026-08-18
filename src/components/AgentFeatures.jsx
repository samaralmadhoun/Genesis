import React from 'react'
import { useEffect } from 'react';

function AgentFeatures() {

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
    <section className="features-section hidden-on-scroll">
        <div className="features-header hidden-on-scroll">
            <h2>Agent features</h2>
            <p>Design AI assistants that research, plan, and execute tasks — all <br /> powered by your prompts.</p>
        </div>
        <div className="features-grid">
            <div className="feature-card hidden-on-scroll">
                <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot size-8.5" aria-hidden="true"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                    </div>
                    <h3>Autonomous Agents</h3>
                    <p>Agents that plan, execute & think step-by-step.</p>
            </div>
            <div className="feature-card hidden-on-scroll">
                <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain size-8.5" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
                </div>
                <h3>Memory & Learning</h3>
                <p>Agents retain memory and improve over time.</p>
            </div>
            <div className="feature-card hidden-on-scroll">
                <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap size-8.5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                </div>
                <h3>Real-time Execution</h3>
                <p>Fast responses with async task processing.</p>
            </div>
        </div>

        <div className="features-footer hidden-on-scroll">
            <h2>From idea to autonomous agent <br /> quickly and effortlessly.</h2>
            <p>Empower your business with AI agents that optimize processes <br /> and accelerate performance.</p>
        </div>
    </section>
  )
}

export default AgentFeatures 