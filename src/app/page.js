"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

export default function Home() {
  const [displayedName, setDisplayedName] = useState(""); // Initially empty
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); // For blinking cursor
  const [typingCompleted, setTypingCompleted] = useState(false); // To track when typing is complete

  const nameText = "Brandon Luong";
  const subtitleText = "Aspiring software engineer from Farmington, Connecticut";

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Adjust the animation duration
      easing: 'ease-in-out',  // Customize the easing effect
      once: true,  // Whether animation should happen only once
    });
  }, []);

  // Typing animation for the name
  useEffect(() => {
    if (nameIndex < nameText.length) {
      setTimeout(() => {
        setDisplayedName(nameText.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100);  // Adjust speed of typing for the name
    } else if (nameIndex === nameText.length && subtitleIndex === 0) {
      setTimeout(() => setSubtitleIndex(1), 500);  // Start subtitle after a brief pause
    }
  }, [nameIndex]);

  // Typing animation for the subtitle after name is fully typed
  useEffect(() => {
    if (subtitleIndex > 0 && subtitleIndex <= subtitleText.length) {
      setTimeout(() => {
        setDisplayedSubtitle(subtitleText.slice(0, subtitleIndex));
        setSubtitleIndex(subtitleIndex + 1);
      }, 50);  // Adjust speed of typing for the subtitle
    }
    // If subtitle finished typing, set typingCompleted to true
    if (subtitleIndex === subtitleText.length) {
      setTypingCompleted(true);
    }
  }, [subtitleIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prev) => !prev); // Toggle cursor visibility
    }, 500);
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div style={styles.container} data-aos="fade-in">
      <div style={styles.overlay} data-aos="zoom-in">
        <div style={styles.content}>
          <div style={styles.profileImage} data-aos="fade-up">
            <Image
              src="/assets/img/profile-img.jpg"
              alt="Profile Picture"
              width={250}
              height={250}
              style={{ borderRadius: '50%' }}
            />
          </div>
          
          <h1 style={styles.name} data-aos="fade-up" data-aos-delay="200">
            {displayedName}
            {!typingCompleted && nameIndex < nameText.length && (
              <span style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
            )}
          </h1>

          <div style={styles.line}></div>

          <p style={styles.subTitle} data-aos="fade-up" data-aos-delay="200">
            {displayedSubtitle}
            {!typingCompleted && subtitleIndex > 0 && subtitleIndex <= subtitleText.length && (
              <span style={{ visibility: showCursor}}>|</span>
            )}
            {typingCompleted && showCursor && <span style={{ visibility: showCursor ? 'visible' : 'hidden', position: "relative" }}>|</span>}
          </p>


          <button
            style={styles.button}
            data-aos="zoom-in"
            data-aos-delay="400"
            onClick={() => window.location.href = '/about'}
          >
            ABOUT ME
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "url('/assets/img/hero-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.44)',
    padding: '50px',
    width: '70%',
    height: '65%',
  },
  content: {
    textAlign: 'center',
    color: 'white',
  },
  profileImage: {
    marginBottom: '20px',
    marginTop: '20px',
  },
  name: {
    fontSize: '56px',
    fontWeight: 'bold',
    margin: 0,
    color: 'white',
    fontFamily: "'Raleway', sans-serif",
  },
  line: {
    margin: '20px auto',
    width: '60%',
    height: '1px',
    backgroundColor: 'white',
  },
  subTitle: {
    fontSize: '24px',
    margin: '10px 0',
    fontFamily: "'Roboto', sans-serif",
    position: "static",
  },
  button: {
    padding: '12px 40px',
    marginBottom: '30px',
    marginTop: '40px',
    backgroundColor: '#3c94af',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '600',
    fontSize: '12px',
    letterSpacing: '1px',
  },
};
