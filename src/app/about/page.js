"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About() {
    useEffect(() => {
        // Initialize AOS for scroll animations
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false, // Allow it to happen multiple times
            mirror: true, // Let the animation happen when scrolling back up
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
                <section id="about" className="about section">
                    <div className="container section-title" data-aos="fade-up" style={{paddingBottom: '10px' }}>
                        <h2>About</h2>
                        <p>
                        Driven by a passion for problem-solving and data insights, I combine technical expertise with a collaborative mindset to deliver solutions that enhance team efficiency and achieve business goals.
                        </p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                    
                        <div className="horizontal-line" style={{marginBottom: '35px' }}></div>

                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4">
                                <Image src="/assets/img/profile-img.jpg" className="img-fluid" alt="Profile" width={300} height={400} />
                            </div>
                            <div className="col-lg-8 content">
                                <h2>Software Developer &amp; Data Engineer.</h2>
                                <p className="fst-italic py-3" style={{ fontSize: '17px', marginTop: '0px !important' }}>
                                    Skilled in data engineering, automation, and software development with a strong focus on PowerShell, SQL, and Python. Currently seeking a job involving software development, data engineering, or infrastructure.
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
                                            <li><i className="bi bi-chevron-right"></i> <strong>Graduation Date:</strong> <span>May 5, 2024</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Major:</strong> <span>Computer Science</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="horizontal-line" style={{marginTop: '35px' }}></div>

                        <p className="py-3">
                            I am extremely passionate about working with data, as well as data visualization to gather insights and solve problems. This can be seen in many of the projects I have participated in these past few years; some of which include development of tools to automate UPS data reporting, a Python-based package optimizer that won a third-place Hackathon category from Google, and a sustainability project involving data insights and climate communication.
                            <br /><br />My experience also includes managing 250,000+ company devices and servers at UPS, utilizing Agile methodologies to develop a service application for Brigham & Women's Hospital as a back-end software engineer, and creating an interactive app prototype as part of a project proposal in Hong Kong.
                            <br /><br />With hands-on experience in developing efficient systems and handling large-scale data, I am committed to using my skills in technology to solve real-world challenges.
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="skills section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Skills</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row skills-content skills-animation">
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facts Section */}
                <section id="facts" className="facts">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Facts</h2>
                            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0" data-aos="fade-up">
                                <div className="fact-item">
                                    <span className="counter" data-target="232">0</span>
                                    <div className="fact-line"></div>
                                    <p>Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                                <div className="fact-item">
                                    <span className="counter" data-target="521">0</span>
                                    <div className="fact-line"></div>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                                <div className="fact-item">
                                    <span className="counter" data-target="1453">0</span>
                                    <div className="fact-line"></div>
                                    <p>Hours Of Support</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                                <div className="fact-item">
                                    <span className="counter" data-target="32">0</span>
                                    <div className="fact-line"></div>
                                    <p>Workers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
