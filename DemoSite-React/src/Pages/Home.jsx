import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Demo Website</h1>
        <p>Your go-to place to learn about my skills and experience</p>
      </header>
      <section className="home-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Dia, a new, passionate developer with base-level experience in various web technologies. 
          Explore my website to know more about my projects and skills.
        </p>
        <h2>My Skills</h2>
        <p>
          I specialize in React, JavaScript, CSS, and more. Check out the Skills page to see a detailed list.
        </p>
      </section>
    </div>
  );
};

export default Home;
