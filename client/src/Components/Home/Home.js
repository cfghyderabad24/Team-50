import React from 'react';
import './Home.css';    
import Education1 from '../../Assets/Education1.png';
import Education2 from '../../Assets/Education2.png';
import Education3 from '../../Assets/Education3.png';
import pic1 from '../../Assets/1.png';
import pic2 from '../../Assets/2.png';
import pic3 from '../../Assets/3.png';
import pic4 from '../../Assets/4.png';
import pic5 from '../../Assets/5.png';
import pic6 from '../../Assets/6.png';
import pic7 from '../../Assets/7.png';
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
                        <div className='d-flex gap-1'>
                            <img style={{height:'400px'}} src={pic1} alt="" />
                            <img style={{height:'400px'}} src={pic2} alt="" />
                            <img style={{height:'400px'}} src={pic3} alt="" />
                            <img style={{height:'400px'}} src={pic4} alt="" />
                        </div>
                        <div className='d-flex ms-5 mt-3 gap-1'>
                            <img style={{height:'400px'}} src={pic5} alt="" />
                            <img style={{height:'400px'}} src={pic6} alt="" />
                            <img style={{height:'400px'}} src={pic7} alt="" />
                        </div>
                    </div>
                </section>

                <section className="content-section text-center">
                    <h2>Contact Us</h2>
                    <p className='text-black'>We'd love to hear from you! Reach out to us via the following methods:</p>
                    <ul>
                        <li>Email: director@subhiksha.org</li>
                        <li>Phone: +91-9908076899, +91-9121104609</li>
                        <li>Address: Plot No: 112, Road No: 3, Dhanalaxmi Colony, Mahendra Hills, East Marredpally, Secunderabad - 500026, Hyderabad, Telangana, India</li>
                    </ul>
                    <p className='text-black'>Office Hours: 08:00 am - 06:00 pm (Sunday closed)</p>
                </section>
            </div>
        </div>
    );
}

export default Home;
