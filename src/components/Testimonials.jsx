import React from 'react'
import { useEffect } from 'react';

function Testimonials() {

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

  const reviews = [
    {
      role: "Founder & CEO",
      name: "Richard Nelson",
      text: "“Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of...",
      avatar: "/pic1.jpg"
    },
    {
      role: "Founder & CEO",
      name: "Sophia Martinez",
      text: "“The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!”",
      avatar: "/pic2.jpg"
    },
    {
      role: "Founder & CEO",
      name: "Ethan Roberts",
      text: "“Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent...",
      avatar: "/pic3.jpg"
    },
    {
      role: "Founder & CEO",
      name: "Isabella Kim",
      text: "“Clean, elegant, and efficient. These components are a dream for any modern web developer who values beautiful code.”",
      avatar: "/pic4.jpg"
    },
    {
      role: "Founder & CEO",
      name: "Liam Johnson",
      text: "“I've tried dozens of UI kits, but this one just feels right. Everything works seamlessly and looks incredibly polished.”",
      avatar: "/pic5.jpg"
    },
    {
      role: "Founder & CEO",
      name: "Ava Patel",
      text: "“Brilliantly structured components with clean, modern styling. Makes development a joy and design updates super quick.”",
      avatar: "/pic6.jpg"
    }
  ];
        

  return (
    <section className="testimonials-section hidden-on-scroll">
        <div className="testimonials-title">
            <h2>Here what aur trusted users about our best AI agents.</h2>
            <p>Empower your business with AI agents that optimize processes and accelerate performance.</p>
        </div>
        <div className="testimonials-grid hidden-on-scroll">
            {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="card-top">
              <span className="user-role">{item.role}</span>
              <img src={item.avatar} alt={item.name} className="user-avatar" />
            </div>
            <p className="review-text">{item.text}</p>
            <span className="user-name">- {item.name}</span>
            </div> 
            ))}
        </div>
    </section>
  )
}


export default Testimonials