"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
          mirror: true
        });
    
        const animateNumbers = (entries) => {
          const speed = 200;
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const updateCount = () => {
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
            }
          });
        };
    
        const observer = new IntersectionObserver(animateNumbers, {
          threshold: 0.5,
        });
    
        const factSections = document.querySelectorAll('.count-box');
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
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
                <br />Driven by a passion for problem-solving and data insights, I bring both technical skills and a collaborative mindset to every project I contribute.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <Image src="/assets/img/profile-img.jpg" className="img-fluid" alt="Profile" width={300} height={400} />
              </div>
              <div className="col-lg-8 content">
                <h2>Software Developer &amp; Data Engineer.</h2>
                <p className="fst-italic py-3" style={{ fontSize: '16px', marginTop: '0px !important' }}>
                    Currently seeking a job involving software development, data engineering, or infrastructure.
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

            <p className="py-3">
                With hands-on experience in developing efficient systems and handling large-scale data, I am committed to using technology to solve real-world challenges.
                <br />I am extremely passionate about working with data, as well as data visualization to gather insights and solve problems. This can be seen in many of the projects I have participated in these past few years; some of which include development of tools to automate UPS data reporting, a Python-based package optimizer that won a third-place Hackathon category from Google, and a sustainability project involving data insights and climate communication.
                <br />My experience includes managing 250,000+ company devices and servers at UPS, streamlining repetitive processes using PowerShell and SQL, and winning third place at a Hackathon for developing a Python-based package optimizer using Google Cloud. I thrive in environments where innovation, efficiency, and teamwork drive success.
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
            <div className="row">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="count-box">
                    <span className="counter" data-target="232">0</span>
                    <p>Clients</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                <div className="count-box">
                    <span className="counter" data-target="521">0</span>
                    <p>Projects</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="count-box">
                    <span className="counter" data-target="1453">0</span>
                    <p>Hours Of Support</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="count-box">
                    <span className="counter" data-target="32">0</span>
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
