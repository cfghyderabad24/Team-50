import React from 'react';
import './Home.css';    
import firstpic from '../../Assets/firstpic.jpg';
import secondpic from '../../Assets/secondpic.jpg';
import thirdpic from '../../Assets/thirdpic.jpg';
import { GrNext, GrPrevious } from "react-icons/gr";

const textVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" }
};

function Home() {
    return (
        <>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img 
                        src={firstpic} 
                        className="d-block mx-auto" 
                        alt="..." 
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src={secondpic} 
                        className="d-block mx-auto" 
                        alt="..." 
                    />
                    
                </div>
                <div className="carousel-item">
                    <img 
                        src={thirdpic} 
                        className="d-block mx-auto" 
                        alt="..." 
                    />
                   
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <GrPrevious className='text-black'/>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <GrNext className='text-black'/>
            </button>
        </div>

        <div className="about-container m-5 mx-auto bg-white text-black">
            <section className="content-section text-center">
                <h2 className='mb-5'>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        <h3>Jane Smith</h3>
                        <p>CTO</p>
                    </div>
                    <div className="team-member">
                        <h3>Mike Johnson</h3>
                        <p>COO</p>
                    </div>
                </div>
            </section>

            <section className="content-section text-center">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Reach out to us via the following methods:</p>
                <ul>
                    <li>Email: contact@company.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Address: 123 Company St, City, Country</li>
                </ul>
            </section>
        </div>
        </>
    );
}

export default Home;



