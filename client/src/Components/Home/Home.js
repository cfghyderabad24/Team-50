import React from 'react';
import './Home.css';    
import Education1 from '../../Assets/Education1.png';
import Education2 from '../../Assets/Education2.png';
import Education3 from '../../Assets/Education3.png';
import { GrNext, GrPrevious } from "react-icons/gr";

function Home() {
    return (
        <div className='pt-1' style={{marginTop:"40px"}}>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: '500px' ,padding:"20px" , width:"80vw", borderRadius:"30px" }} src={Education1} className="d-block mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: '500px' ,padding:"20px" , width:"80vw", borderRadius:"30px" }} src={Education2} className="d-block mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: '500px' ,padding:"20px" , width:"80vw", borderRadius:"30px" }} src={Education3} className="d-block mx-auto" alt="..." />
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
        </div>
    );
}

export default Home;
