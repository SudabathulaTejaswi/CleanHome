const React ='react';
import './HomePage.css';
import {useState, useEffect,useLayoutEffect, useRef } from 'react';
import logo2 from './../assets/logo.png';
import img1 from './../assets/img1.png';
import single from './../assets/singlestar.png'
import service_img from './../assets/img3.png';
import video from './../assets/video.mp4';
import s from './../assets/img3.png';
import img2 from './../assets/img2.png';
import arrow from './../assets/phone.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import team1 from './../assets/image.png';
import star from './../assets/5star.webp';

const HomePage = ({navig}) => {
    const sections = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        contact: useRef(null),
      };

      const scrollToSection = (word) => {
        if (sections[word]?.current) {
          sections[word].current.scrollIntoView({ behavior: "smooth" });
        }
      };

      // Auto-scroll when `scrollToWord` prop changes
      useEffect(() => {
        if (navig) {
          scrollToSection(navig);
        }
      }, [navig]);
 
    return (
        <div>
            {/* <div className="nav">
                <div className="logo">
                    <img src={logo} alt="" className='logo'/>
                    <h1>CleanSlate</h1>
                </div>
            
                <div className="part2">
                    
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Services</h3>
                    <h3>Contact Us</h3>
                </div>
                <a className='started' href=''>Get Started</a>
            </div> */}
            <div className="body" >
                <div id="card1">
                <div className="part1">
                    <div className="title">
                        <img src={single} alt="" />
                        <h4>CLEANING SERVICES</h4>
                    </div>
                    
                    <h1 className='subtitle'>Cleaning Services for all our needs</h1>
                    <p>We provide reliable and professional cleaning services for homes, offices, and commercial spaces, ensuring a spotless environment tailored to your needs.</p>
                    <a className='started' href=''>Get Started</a>
                </div>
                <div className="part2">
                    <div className="outer-card">
                        <img src={logo2} alt="" className='logo2'/>
                        <div className="inner-card">
                            <img src={img1} alt="" className='img1'/>
                        </div>
                    </div>
                </div>
                <div className="part3">
                    <div className="card1">
                        <h1>10K+</h1>
                        <p>Homes Cleaned</p>
                    </div><br /><br />
                    <div className="card1">
                        <h1>126+</h1>
                        <p>Professional Tools</p>
                    </div><br /><br />
                    <div className="card1">
                        <h1>99%</h1>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                </div>
                

                <div className="section2">
                    <div className="card1">
                        <img src={s} className="s" alt="" />
                        <h2>Flexible Scheduling</h2>
                        <p>Choose cleaning times that fit your schedule with our hassle-free, flexible booking options.</p>
                    </div>
                    <div className="card1">
                        <img src={s} className="s" alt="" />
                        <h2>Professional Staff</h2>
                        <p>Our experienced and trained staff deliver top-quality cleaning with care and attention to detail.</p>
                    </div>
                    <div className="card1">
                        <img src={s} className="s" alt="" />
                        <h2>Competitive Pricing</h2>
                        <p>Get high-quality cleaning services at affordable and transparent prices.</p>
                    </div>
                </div>

                <div className="section3" ref={sections.about}>
                    <div className="part1">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>ABOUT US</h4>
                        </div>
                        <h1>Clean Home with Our Professional Cleaning Services</h1>
                    </div>
                    <div className="part2">
                        <div className="card2">
                            <h2>Experienced</h2>
                            <p className='percent'>98%</p>
                        </div>
                        <progress value={0.98} /><br /><br />
                        <div className="card2">
                            <h2>Reliable</h2>
                            <p className='percent'>86%</p>
                        </div>
                        <progress value={0.86} /><br /><br />
                        <div className="card2">
                            <h2>Skilled & Capable</h2>
                            <p className='percent'>90%</p>
                        </div>
                        <progress value={0.9} /><br /><br />
                        <div className="card2">
                            <h2>Flexible</h2>
                            <p className='percent'>80%</p>
                        </div>
                        <progress value={0.8} />
                    </div>
                    
                </div>

                <div className="section4">
                    <video width="850" height="500" controls >
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>

                <div className="section5" ref={sections.services}>
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>Our Services</h4>
                        </div>
                        <div className="part1">
                            <div className="card3">
                                <h1>Services We Provide</h1>
                                <p>Our professional cleaning services are tailored to your needs, ensuring a clean and spotless environment.</p>
                            </div>
                            <a className='started' href=''>All Services</a>
                        </div>
                        <div className="part2">
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>Office Cleaning</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod impedit sequi assumenda labore aperiam porro consequuntur voluptates sed ipsam iure in molestiae nulla eaque, repellat eius commodi hic saepe minus alias modi vel vitae? Doloribus, blanditiis nulla et, dolores nobis nihil libero, hic odio quasi obcaecati velit exercitationem sint?</p>
                                <a href="">Learn More</a>
                            </div>
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>House Cleaning</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod impedit sequi assumenda labore aperiam porro consequuntur voluptates sed ipsam iure in molestiae nulla eaque, repellat eius commodi hic saepe minus alias modi vel vitae? Doloribus, blanditiis nulla et, dolores nobis nihil libero, hic odio quasi obcaecati velit exercitationem sint?</p>
                                <a href="">Learn More</a>
                            </div>
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>Carpet Cleaning</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod impedit sequi assumenda labore aperiam porro consequuntur voluptates sed ipsam iure in molestiae nulla eaque, repellat eius commodi hic saepe minus alias modi vel vitae? Doloribus, blanditiis nulla et, dolores nobis nihil libero, hic odio quasi obcaecati velit exercitationem sint?</p>
                                <a href="">Learn More</a>
                            </div>
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>Kitchen Cleaning</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod impedit sequi assumenda labore aperiam porro consequuntur voluptates sed ipsam iure in molestiae nulla eaque, repellat eius commodi hic saepe minus alias modi vel vitae? Doloribus, blanditiis nulla et, dolores nobis nihil libero, hic odio quasi obcaecati velit exercitationem sint?</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                </div>

                <div className="section6">
                    <div className="part1">
                        <div id="card">
                            <div id="big"></div>
                            <img src={img2} alt="" id='img1'/>
                            <img src={logo2} alt="" id='img2'/>
                        </div>
                        
                    </div>
                    <div className="part2">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>Why Choose Us</h4>
                        </div>
                        <h1>Providing Friendly, Reliable Cleaning Services</h1>
                        <p>Serving <span id="tag">4000+</span> properties every month.</p>
                        <br />
                        <div id="points">
                            <div id="point">
                                <img src={arrow} />
                                <h3>High-Quality Cleaning Services</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic repudiandae laboriosam, minima iste inventore. Omnis repellat atque fuga accusamus.</p>
                            <br />
                        </div>
                        <div id="points">
                            <div id="point">
                                <img src={arrow} />
                                <h3>Trained and Professional Staff</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic repudiandae laboriosam, minima iste inventore. Omnis repellat atque fuga accusamus.</p>
                            <br />
                        </div>
                        <div id="points">
                            <div id="point">
                                <img src={arrow} />
                                <h3>Exceptional Customer Service</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic repudiandae laboriosam, minima iste inventore. Omnis repellat atque fuga accusamus.</p>
            
                        </div>
                    </div>
                </div>

                <div className="section7">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>PRICING TABLE</h4>
                        </div>
                        <h1 className=''>Pricing Plans for Every Budget</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sed inventore sunt optio dignissimos accusantium, quidem ut non alias ducimus?</p>
                        <div id="part1">
                            <div id="card4">
                                <div className="title">
                                    <img src={single} alt="" />
                                    <h4>BASIC CLEANING</h4>
                                </div>
                                <h1>$ 350 <span style={{fontSize:'20px'}}>/service</span> </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit est, quasi commodi vero assumenda corrupti, quidem perferendis tenetur facere in illo animi eveniet, nostrum rem. Natus quibusdam sequi modi!</p>
                                <hr />
                                <div id="point">
                                    <img src={arrow} />
                                    <p>60 Minutes Consultation</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>2 Bedroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>3 Bathroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>1 Living Room Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>7 Days Guarentee</p>
                                </div>
                                <a href="">Get Started</a>
                            </div>
                            <div id="card4">
                                <div className="title">
                                    <img src={single} alt="" />
                                    <h4>PRO CLEANING</h4>
                                </div>
                                <h1>$ 650 <span style={{fontSize:'20px'}}>/service</span> </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit est, quasi commodi vero assumenda corrupti, quidem perferendis tenetur facere in illo animi eveniet, nostrum rem. Natus quibusdam sequi modi!</p>
                                <hr />
                                <div id="point">
                                    <img src={arrow} />
                                    <p>90 Minutes Consultation</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>3 Bedroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>4 Bathroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>1 Living Room Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>7 Days Guarentee</p>
                                </div>
                                <a href="">Get Started</a>
                            </div>
                            <div id="card4">
                                <div className="title">
                                    <img src={single} alt="" />
                                    <h4>DELUX CLEANING</h4>
                                </div>
                                <h1>$ 950 <span style={{fontSize:'20px'}}>/service</span> </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit est, quasi commodi vero assumenda corrupti, quidem perferendis tenetur facere in illo animi eveniet, nostrum rem. Natus quibusdam sequi modi!</p>
                                <hr />
                                <div id="point">
                                    <img src={arrow} />
                                    <p>120 Minutes Consultation</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>4 Bedroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>5 Bathroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>1 Living Room Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>7 Days Guarentee</p>
                                </div>
                                <a href="">Get Started</a>
                            </div>
                        </div>
                </div>
                <div id="section8">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>PRICING TABLE</h4>
                        </div>
                        <h1 className=''>Pricing Plans for Every Budget</h1>
                        <div id="cards">
                            <div id="card5">
                                <img src={team1} alt="" />
                                <span id="team">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                            <div id="card5">
                                <img src={team1} alt="" />
                                <span id="team">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                            <div id="card5">
                                <img src={team1} alt="" />
                                <span id="team">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                            <div id="card5">
                                <img src={team1} alt="" />
                                <span id="team">
                                    <h2>John Doe</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                        </div>
                </div>

                <div id="section9">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>TESTIMONIAL</h4>
                        </div>
                        <h1 className=''>Here What Our Clients Say</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sed inventore sunt optio dignissimos accusantium, quidem ut non alias ducimus?</p>
                        <div id="testimonial">
                        <div id="box">
                            <div id="box1">
                                <img src={star} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa minus totam tenetur asperiores veniam delectus omnis excepturi unde inventore molestiae.</p>
                            </div>
                            <hr />
                            <div id="box2">
                                <div id="part1">
                                    
                                </div>
                                <div id="part2">
                                    <h3>James Smith</h3>
                                    <p>Office Manager</p>
                                </div>
                            </div>
                        </div>
                        <div id="box">
                            <div id="box1">
                                <img src={star} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa minus totam tenetur asperiores veniam delectus omnis excepturi unde inventore molestiae.</p>
                            </div>
                            <hr />
                            <div id="box2">
                                <div id="part1">
                                    
                                </div>
                                <div id="part2">
                                    <h3>James Smith</h3>
                                    <p>Office Manager</p>
                                </div>
                            </div>
                        </div>
                        <div id="box">
                            <div id="box1">
                                <img src={star} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa minus totam tenetur asperiores veniam delectus omnis excepturi unde inventore molestiae.</p>
                            </div>
                            <hr />
                            <div id="box2">
                                <div id="part1">
                                    
                                </div>
                                <div id="part2">
                                    <h3>James Smith</h3>
                                    <p>Office Manager</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                </div>

                <div id="section10" ref={sections.contact}>
                    <h2>Trusted by 50k+ Customers</h2>
                    <div id="part">
                        <img src={star} alt="" />
                        <p>4.4/5  3,841 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;