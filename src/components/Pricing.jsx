import React from 'react'
import { useEffect } from 'react';

function Pricing() {

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

    const plans = [
    {
      name: "Starter",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket size-3.5" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>,
      price: "$19",
      period: "/month",
      desc: "For individuals and small teams",
      buttonText: "Get Started",
      isPopular: false,

      features: [
        "Up to 10 projects",
        "10 AI tasks/month",
        "Basic text generation",
        "Simple chatbot access",
        "Email support only",
        "Community resources"
      ]
    },

    {
      name: "Professional",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 24 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap size-3.5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>,
      price: "$49",
      period: "/month",
      desc: "For growing teams and startups",
      buttonText: "Upgrade Now",
      isPopular: true, 
      features: [
        "Unlimited AI tasks",
        "API integration",
        "Text & image outputs",
        "Priority chat & email support",
        "Detailed analytics",
        "Team collaboration"
      ]
    },

    {
      name: "Enterprise",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown size-3.5" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>,
      price: "$149",
      period: "/month",
      desc: "For enterprises and agencies",
      buttonText: "Contact Sales",
      isPopular: false,
      features: [
        "Custom AI models",
        "Team access control",
        "Dedicated account manager",
        "Secure private API",
        "SLA uptime guarantee",
        "24/7 premium support"
      ]
    }
  ];

  return (
    <section className='pricing-section hidden-on-scroll'>
        <div className="pricing-header">
        <h2>Our Pricing Plans</h2>
        <p>A visual collection of our most recent works – each piece crafted with intention, emotion and style.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className={`pricing-card ${plan.isPopular ? 'popular' : ''}`} key={index}>
            <div className="plan-badge">
              <span>{plan.icon} {plan.name}</span>
            </div>

            <div className="pricing-info">
              <h3>{plan.price} <span>{plan.period}</span></h3>
              <p>{plan.desc}</p>
            </div>

            <button className={`pricing-btn ${plan.isPopular ? 'btn-glow' : ''}`}>
              {plan.buttonText}
            </button>

            <ul className="pricing-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <span className="check-icon">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing