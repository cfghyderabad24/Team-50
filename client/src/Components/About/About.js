import React from 'react';
import './About.css';

function About() {
    return (
        <div style={{paddingTop:'40px'}} className="about-container m-5 mx-auto bg-white text-black">
            <section className="hero-section text-center">
                <div className="hero-content">
                    <h1>About Us</h1>
                    <p className='text-black'>Subhiksha Foundation is dedicated to empowering underprivileged communities through education and sustainable development. We believe in the transformative power of education and aim to provide quality educational resources to those in need. Our programs focus on enhancing literacy, promoting eco-friendly practices, and fostering holistic community development. By addressing the educational and environmental needs of our communities, we strive to create a brighter, more sustainable future for all. Our team is committed to making a positive impact, one step at a time.</p>
                </div>
            </section>

            <section className="content-section text-center">
                <h2>Our Mission</h2>
                <p className='text-black'>
                Subhiksha Foundation's mission is to empower underprivileged communities through education and sustainable development. We aim to provide quality educational resources and promote eco-friendly practices, fostering holistic community growth. Our goal is to create a brighter, more sustainable future by addressing educational and environmental needs, ensuring every individual has the opportunity to thrive and contribute to a better world.
                </p>
            </section>  
        </div>
    );
}

export default About;
