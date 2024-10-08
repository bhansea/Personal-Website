"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import dynamic from 'next/dynamic';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';


// Dynamically import Swiper to prevent SSR issues
const Navigation = dynamic(() => import('swiper').then(mod => mod.Navigation), { ssr: false });

export default function About() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Initialize AOS for scroll animations
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false, // Allow it to happen multiple times
            mirror: true, // Let the animation happen when scrolling back up
        });

        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach((bar) => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = `${percentage}%`;
        });

    

        // Number animation when the section comes into view
        const animateNumbers = (entries, observer) => {
            entries.forEach(entry => {
                const counters = entry.target.querySelectorAll('.counter');
                const speed = 200; // Control the speed of counting

                if (entry.isIntersecting) {
                    counters.forEach(counter => {
                        const updateCount = () => {
                            const target = +counter.getAttribute('data-target');
                            const count = +counter.innerText;
                            const increment = target / speed;

                            if (count < target) {
                                counter.innerText = Math.ceil(count + increment);
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                    });
                } else {
                    // Reset counters to 0 when out of view
                    counters.forEach(counter => {
                        counter.innerText = '0';
                    });
                }
            });
        };

        const observer = new IntersectionObserver(animateNumbers, {
            threshold: 0.6, // Trigger animation when 60% of the element is visible
        });

        const factSections = document.querySelectorAll('.fact-item');
        factSections.forEach(section => {
            observer.observe(section);
        });

    }, []);

    const [displayText, setDisplayText] = useState(''); // Empty at first
    const fullText = 'Software Developer & Data Engineer. '; // Full text you want to type

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index)); // Slices up to current index
                index++;
            } else {
                clearInterval(typingInterval); // Stop when done typing
            }
        }, 100); // Adjust typing speed (100ms per character)
    
        return () => clearInterval(typingInterval); // Cleanup interval on unmount
    }, []);

    useEffect(() => {
        // Initialize AOS for scroll animations
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false, // Allow it to happen multiple times
            mirror: true, // Let the animation happen when scrolling back up
        });
    
        // Intersection observer for progress bars
        const progressBars = document.querySelectorAll('.progress-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                if (entry.isIntersecting) {
                    // Set the width to trigger the animation
                    bar.style.width = `${percentage}%`;
                } else {
                    // Reset the width to 0 when it's out of view
                    bar.style.width = '0';
                }
            });
        }, { threshold: 0.6 });  // Adjust threshold if necessary
    
        // Observe each progress bar
        progressBars.forEach(bar => observer.observe(bar));
    
        return () => {
            // Cleanup observers when component unmounts
            progressBars.forEach(bar => observer.unobserve(bar));
        };

    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/assets/img/service-app/image001.png',
        '/assets/img/service-app/image018.png',
        '/assets/img/service-app/image104.png',
        '/assets/img/service-app/image066.png',
        '/assets/img/service-app/image126.png',
        '/assets/img/service-app/image123.png',
        '/assets/img/service-app/image142.png',
    ];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About - Personal Stats</title>
                <meta name="description" content="Personal portfolio showcasing skills and experience" />
                <meta name="keywords" content="portfolio, brandon, software engineer, stats" />
                <link href="/assets/img/favicon.png" rel="icon" />
                <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
            </Head>

            <main className="main">
                {/* About Section */}
                <section id="about" className="about section" style={{paddingBottom: '0px'}}>
                    <div className="container section-title" data-aos="fade-up" style={{paddingBottom: '10px' }}>
                        <h2>About</h2>
                        <p>
                            Driven by a passion for problem-solving and data insights, I combine technical expertise with a collaborative mindset to deliver solutions that enhance team efficiency and achieve business goals.
                        </p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                    
                        <div className="horizontal-line" style={{ marginBottom: '35px' }}></div>

                        <div className="row gy-4 justify-content-center align-items-center">
                            <div className="col-lg-4">
                                <Image src="/assets/img/grad-pic.jpg" className="img-fluid" alt="Profile" width={440} height={540} />
                            </div>
                            <div className="col-lg-8 content">
                                {/* Typing animation applied here */}
                                <h2 style={{ marginTop: '10px' }} className="typing-effect">{displayText}</h2>
                                <p className="fst-italic py-3" style={{ fontSize: '17px', marginTop: '0px !important' }}>
                                    Skilled in software development, data engineering, and automation with a strong focus on Java, PowerShell, SQL, and Python. Currently seeking a job involving software development, data engineering, or infrastructure.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Current Position:</strong> <span>UPS ESM Infrastructure Intern</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Science</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>US Citizenship:</strong> <span>Citizen</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Farmington, CT</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Graduation Date:</strong> <span>May 2024</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Major:</strong> <span>Computer Science</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                        </ul>
                                    </div>
                                    <p className="py-3">
                                        I am extremely passionate about working with data, as well as data visualization to gather insights and solve problems. This can be seen in many of the projects I have participated in these past few years; some of which include development of tools to automate UPS data reporting, a Python-based package optimizer that won a third-place Hackathon category from Google, and a capstone project focused on sustainability, leveraging data insights for effective climate communication.
                                        <br /><br />My experience also includes managing 250,000+ company devices and servers at UPS, utilizing Agile methodologies to develop a service application for Brigham & Women's Hospital as a back-end software engineer, and creating an interactive app prototype as part of a project proposal in Hong Kong.
                                        <br /><br />With hands-on experience in developing efficient systems and handling large-scale data, I am committed to using my skills in technology to solve real-world challenges. As an engineer, my goal is to deepen my expertise in data analysis and representation, as I firmly believe that data is the key to everything—from software development to business planning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="horizontal-line" style={{marginTop: '35px' }}></div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="about" className="skills section" style={{ paddingBottom: '0px' }}>
                    <div className="container section-title" data-aos="fade-up" style={{ paddingBottom: '30px' }}>
                        <h2>Education</h2>
                    </div>

                    <div className="edu-container" data-aos="fade-up" data-aos-delay="100" style={{ marginBottom: '30px' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 d-flex align-items-center mx-auto justify-content-between">
                            <img src="/assets/img/wpi-logo.png" alt="Icon" className="me-3" width="120" height="120" />
                            <div className="w-100" style={{ margin: '5px' }}>
                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                                    <strong>Worcester Polytechnic Institute&nbsp;</strong> | Worcester, MA
                                <span className="flex-grow-1 border-bottom mx-3"></span>
                                <span>Aug. 2020 - May 2024</span>
                                </p>
                                <p>Bachelor’s Degree in Computer Science</p>
                                <p>GPA: 3.61, High Distinction</p>
                            </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 d-flex align-items-center mx-auto justify-content-between">
                            <img src="/assets/img/fps-logo.png" alt="Farmington logo" className="me-3" width="120" height="120" />
                            <div className="w-100" style={{ margin: '5px' }}>
                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                                <strong>Farmington High School&nbsp;</strong> | Farmington, CT
                                <span className="flex-grow-1 border-bottom mx-3"></span>
                                <span>Sep. 2016 - Jun. 2020</span>
                                </p>
                                <p>Bachelor’s Degree in Computer Science</p>
                                <p>GPA: 4.0, First Honors</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </section>



                {/* Skills Section */}
                <section id="about" className="skills section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Skills</h2>
                        <p>This is a personal assessment of my proficiency in each skill, with 100% being my strongest skill.</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row skills-content skills-animation">
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill"><span>Java</span> <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" data-percentage="100" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>SQL</span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" data-percentage="90" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>PowerShell</span> <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" data-percentage="80" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill"><span>Python</span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" data-percentage="90" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>HTML/CSS</span> <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" data-percentage="75" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>JavaScript</span> <i className="val">60%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" data-percentage="60" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Highlights Section */}
                <section id="about" className="facts" style={{paddingBottom: '125px'}}>
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Project Highlights</h2>
                        </div>


                        <div className="section-title">
                            <h3>Brigham & Women's Hospital Service Application</h3>
                            <p style={{ textAlign: "left" }}>
                                This service application was developed through a collaboration between Brigham & Women's Hospital and Worcester Polytechnic Institute (WPI) to help improve hospital staff workflows. The application includes a pathfinding feature for efficient navigation around the hospital, integrated service request modules to streamline staff requests, and additional features like synchronized map editing to allow for future scalability.
                                <br /><br />
                                As part of a team of 10 students, I contributed to both the backend development and user interface using Java, JavaFX, and PostgreSQL, applying Agile methodologies and design patterns such as Data Access Objects (DAO). Over the course of two months, our team developed a functional, high-quality solution, presented to hospital representatives in May 2023.
                                <br /><br />
                                Below are a few notable metrics from this project. Some statistics were gathered using OpenHub, and the cost estimate was calculated using the <a href="https://en.wikipedia.org/wiki/COCOMO" target="_blank">Basic COCOMO Model</a>.
                            </p>
                        </div>


                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0" data-aos="fade-up">
                                <div className="fact-item">
                                    <span className="counter" data-target="10">0</span>
                                    <div className="fact-line"></div>
                                    <p>Team Members</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                                <div className="fact-item">
                                    <span className="counter" data-target="3077">0</span>
                                    <div className="fact-line"></div>
                                    <p style={{marginBottom: "0px"}}>Lines of Code Written</p>
                                    <small style={{color: "#666", fontSize: "14px"}}>(Personal contribution)</small>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                                <div className="fact-item">
                                    <span className="counter" data-target="91">0</span>
                                    <div className="fact-line"></div>
                                    <p style={{marginBottom: "0px"}}>Tests Written</p>
                                    <small style={{color: "#666", fontSize: "14px"}}>(Personal contribution)</small>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                                <div className="fact-item">
                                    <span className="counter" data-target="97317">0</span>
                                    <div className="fact-line"></div>
                                    <p>Estimated Cost($)</p>
                                </div>
                            </div>
                        </div>

                        {/* B&WH Project Image Slider */}
                        <div className="container" data-aos="fade-up" style={{ marginTop: '60px' }}>
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    loop={true}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper"
                                >
                                    {images.map((src, index) => (
                                        <SwiperSlide key={index} onClick={() => openLightbox(index)}>
                                            <img src={src} alt={`Slide ${index + 1}`} style={{ cursor: 'pointer' }} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {isOpen && (
                                    <Lightbox
                                        open={isOpen}
                                        close={() => setIsOpen(false)}
                                        slides={images.map((src) => ({ src }))}
                                        index={currentImageIndex}
                                        onClose={() => setIsOpen(false)}
                                        onIndexChange={setCurrentImageIndex}
                                    />
                                )}
                        </div>

                        <div className="horizontal-line" style={{marginTop: '35px' }}></div>

                        {/* SCP App Feasibility */}
                        <div className="section-title">
                            <div className="container" data-aos="fade-up" style={{ marginTop: '60px' }}>
                                <h3 style={{ marginTop: "60px" }}>Smart Cultural Precinct Mobile App Proposal</h3>
                                <p style={{ textAlign: "left" }}>
                                The Smart Cultural Precinct (SCP) initiative, developed by the Institute for Sustainable Urbanisation (ISU), aims to preserve the cultural heritage and sense of community in Hong Kong’s Central District amidst rapid urban development. Our team of 4 students traveled to Hong Kong in 2023 to collaborate on designing a mobile application as part of this project. The app was envisioned as a digital platform to promote and support the SCP region, connecting various stakeholders, including local businesses, residents, and tourists, while enhancing community engagement and cultural preservation.
                                <br />
                                </p>
                                
                                <img src="/assets/img/scp-methodology-flowchart.png" alt="Icon" className="me-3" width="640" height="360" data-aos="fade-up" />

                                
                                <p style={{ textAlign: "left" }} data-aos="fade-up">
                                <br />
                                As shown in the methodology flowchart above, our project objectives included (1) identifying heritage sites, (2) gathering community input, (3) establishing the app’s identity, and (4) evaluating its feasibility. We developed an interactive prototype that was refined through consultations with software developers, community members, and stakeholders. Over the course of this four-month effort, we gathered valuable feedback that informed several final recommendations for future development. These recommendations, along with more detailed findings, can be explored in the <a href="https://digital.wpi.edu/concern/student_works/70795c08j?locale=en" target="_blank">WPI digital library</a>.
                                </p>

                                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "30px" }}>

                                    <div style={{ flexGrow: 1, textAlign: 'center' }} data-aos="fade-up">
                                        <img src="/assets/img/scp-app-prototype.png" alt="Icon" className="me-3" width="720" height="464" />
                                        <p style={{ fontSize: "14px", textAlign: "center", color: "#666" }}>
                                            Explore our interactive prototype of the SCP mobile app <a href="https://www.figma.com/proto/BHRSH5zFyOar2FzA4X3bcx/THE-SCP-app?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=4-2&starting-point-node-id=197%3A2208&device-frame=0" target="_blank">in Figma</a>
                                        </p>
                                    </div>

                                    <iframe src="https://drive.google.com/file/d/1ySaj26zC9KHjkbuInZXD9VZsm_hEbMYK/preview" data-aos="fade-up" width="45%" height="581px"></iframe>
                                </div>

                            </div>
                        </div>


                        <div className="horizontal-line" style={{marginTop: '35px' }}></div>

                        {/* Research Paper */}
                        <div className="section-title" style={{ paddingBottom: '0px' }}>
                            <div className="container" data-aos="fade-up" style={{ marginTop: '60px' }}>
                                <h3 style={{ marginTop: "60px" }}>Research Paper on Impact of AI on Education Systems</h3>
                                <p style={{ textAlign: "left", marginBottom: "30px" }}>
                                    During my time at WPI, I wrote an academic research paper that explores the integration of artificial intelligence (AI) in education. The paper examines how AI can enhance classrooms through personalized learning experiences and improved teaching practices. However, it also addresses the ethical challenges and the essential role of human educators in maintaining a balance between AI-driven solutions and human-centric skills. This project advocates for thoughtful, responsible AI use that complements, rather than replaces, traditional teaching methods.
                                <br />
                                </p>

                                <iframe
                                    src="\assets\Redefining Learning - Evaluating the Uses of AI in Education Systems.pdf"
                                    width="100%"
                                    height="500px"
                                    style={{ border: 'none', margin: '30px 0px' }}
                                    title="Research Paper PDF"
                                />
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    );
}
