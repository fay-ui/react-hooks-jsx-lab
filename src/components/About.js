// src/components/About.js
import React from 'react';

// Update the image URL to match the test expectation
const image = 'https://i.imgur.com/mV8PQxj.gif';  // Replace with the correct image URL

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am passionate about web development and always looking to learn new things!
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
