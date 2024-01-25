import React from 'react';
import './About.css'
function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 style={{ color: 'rgb(0, 136, 255)' }}>About me</h1>
        <div className="aboutp">
          <p>
            This is an Unofficial and Non Profitable blog for Radha swami Sangat. This blog is maintained by Baba Ji's Lovers. You can find here satsang videos, shabads and many more related to Radha Swami dera, Ferozepur. For any Queries or Support please mail us at <br /><span>Email:</span> manchandaneeraj396@gmail.com <br /><span>Contact:</span> 70158-23645
            <br />
          </p>
          <p style={{ textAlign: 'center', fontSize: '1.4rem' }}>Radha Soami Ji</p>
        </div>
      </section>
    </>
  );
}

export default About;
