"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from 'next/link';


export default function Home() {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingCompleted, setTypingCompleted] = useState(false);

  const nameText = "Brandon Luong";
  const subtitleText = "Aspiring software engineer from Farmington, Connecticut";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    if (nameIndex < nameText.length) {
      setTimeout(() => {
        setDisplayedName(nameText.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100);
    } else if (nameIndex === nameText.length && subtitleIndex === 0) {
      setTimeout(() => setSubtitleIndex(1), 500);
    }
  }, [nameIndex]);

  useEffect(() => {
    if (subtitleIndex > 0 && subtitleIndex <= subtitleText.length) {
      setTimeout(() => {
        setDisplayedSubtitle(subtitleText.slice(0, subtitleIndex));
        setSubtitleIndex(subtitleIndex + 1);
      }, 50);
    }
    if (subtitleIndex === subtitleText.length) {
      setTypingCompleted(true);
    }
  }, [subtitleIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
    });

    const progressBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const bar = entry.target;
            const percentage = bar.getAttribute('data-percentage');
            if (entry.isIntersecting) {
                bar.style.width = `${percentage}%`;
            } else {
                bar.style.width = '0';
            }
        });
    }, { threshold: 0.6 });

    progressBars.forEach(bar => observer.observe(bar));

    return () => {
        progressBars.forEach(bar => observer.unobserve(bar));
    };

}, []);

  return (
    <>
      <div className="heroContainer" data-aos="fade-in">
        <div className="overlay" data-aos="zoom-in">
          <div className="heroContent">
            <div className="profileImage" data-aos="fade-up">
              <Image
                src="/assets/img/profile-img.jpg"
                alt="Profile Picture"
                width={250}
                height={250}
                style={{ borderRadius: '50%' }}  // Kept as inline style for image border radius
              />
            </div>

            <h1 className="name" data-aos="fade-up" data-aos-delay="200">
              {displayedName}
              {!typingCompleted && nameIndex < nameText.length && (
                <span style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
              )}
            </h1>

            <div className="line"></div>

            <p className="subTitle" data-aos="fade-up" data-aos-delay="200">
              {displayedSubtitle}
              {!typingCompleted && subtitleIndex > 0 && subtitleIndex <= subtitleText.length && (
                <span style={{ visibility: showCursor }}>|</span>
              )}
              {typingCompleted && showCursor && (
                <span style={{ visibility: showCursor ? 'visible' : 'hidden', position: 'relative' }}>|</span>
              )}
            </p>
          </div>
        </div>
      </div>

      <main className="main">
        <section id="main" className="about section">
          <div className="container section-title newSection" data-aos="fade-up">
            <p>
              Hi, I'm Brandon, a Chinese American with a passion for data exploration and technology. I recently graduated from Worcester Polytechnic Institute with a Bachelor's Degree in Computer Science. Currently, I work at United Parcel Service as part of the Enterprise Systems Management team, and I’m also actively seeking new job opportunities to further my career.
              <br /><br />
              Feel free to explore my website, where I’ve shared some of my work and projects. Also, don’t forget to check out the photo gallery, where I’ve posted some pictures from my travels—capturing many of the diverse experiences that continue to inspire me.
              <br /><br />
              Thank you for visiting, and happy exploring!
              <br /><br />
              Best,
              <br />
              Brandon
            </p>
          </div>
        </section>
      </main>
    </>

  );
}

