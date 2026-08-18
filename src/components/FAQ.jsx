import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function FAQ() {

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

    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need coding or design experience to use PrebuiltUI?",
      answer: "Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design skills aren't required. You can use components as-is or customize them."
    },

    {
      question: "What is PrebuiltUI and how does it help developers and designers?",
      answer: "PrebuiltUI provides ready-to-use, customizable UI components and templates, saving time for developers and designers."
    },

    {
      question: "Can I use PrebuiltUI components in my existing project?",
      answer: "Yes, components can be integrated into HTML, React, Next.js, Vue, and other projects using Tailwind CSS."
    },

    {
      question: "How customizable are the generated components?",
      answer: "Components are highly customizable with Tailwind utility classes, theming, and structural adjustments."
    },

    {
      question: "Does PrebuiltUI support team collaboration?",
      answer: "There's no clear documentation on built-in collaboration features. Check their support for team options."
    },

    {
      question: "Can I try PrebuiltUI before purchasing a plan?",
      answer: "Yes, you can try PrebuiltUI with full access to features."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='faq-section hidden-on-scroll'>
    <div className="faq-header">
        <h2>FAQ's</h2>
        <p>Looking for answers to your frequently asked questions? Check out our FAQ's section below to find.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${openIndex === index ? 'active' : ''}`} 
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="arrow-icon">{openIndex === index ? 
                 '∧' : '∨'}
                </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ