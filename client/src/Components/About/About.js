import React from 'react';
import './About.css';

function About() {
    return (
        <div style={{paddingTop:'40px'}} className="about-container m-5 mx-auto bg-white text-black">
            <section className="hero-section text-center">
                <div className="hero-content">
                    <h1>About Us</h1>
                    <p className='text-black'>Learn more about our mission, values, and the team behind our success.</p>
                </div>
            </section>

            <section className="content-section text-center">
                <h2>Our Mission</h2>
                <p className='text-black'>
                    Our mission is to deliver the best educational resources and solutions to our students,
                    ensuring satisfaction and excellence in everything we do. We strive to innovate
                    and improve continuously, making a positive impact on the education industry and the world.
                </p>
            </section>  
        </div>
    );
}

export default About;
