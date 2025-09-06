import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>At Book Hub, we make discovering books simple and enjoyable. Our platform is designed for readers who want quick access to the essentials—book cover, title, and author—so you can browse and find your next read without distractions.</p>
            <p className='fs-17'>Whether you’re searching for timeless classics or exploring new releases, Book Hub brings you a clean and easy way to explore the world of books.
              Our goal is to create a space where readers can visually connect with books at a glance, making it easier to choose what inspires you next.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
