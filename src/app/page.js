"use client";

import Image from 'next/image';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Adjust the animation duration
      easing: 'ease-in-out',  // Customize the easing effect
      once: true,  // Whether animation should happen only once
    });
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
          <h1 style={styles.name} data-aos="fade-up" data-aos-delay="200">Brandon Luong</h1>

          <div style={styles.line}></div>

          <p style={styles.subTitle} data-aos="fade-up" data-aos-delay="200">
            Aspiring software engineer from Farmington, Connecticut
          </p>
          <button style={styles.button} data-aos="zoom-in" data-aos-delay="400">
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
  },
  button: {
    padding: '12px 40px',
    marginBottom: '30px',
    marginTop: '25px',
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
