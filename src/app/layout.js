"use client";

import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const pathname = usePathname(); // Get current pathname

  return (
    <html lang="en">
      
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>
      </Head>

      <body>
        {/* Header */}
        <header id="header" className="header sticky-top">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Logo (Sitename) */}
            <Link href="/" style={{ outline:"none", textDecoration:"none" }}>
              <h1 className="sitename">Brandon</h1>
            </Link>

            {/* Centered Navigation */}
            <nav id="navmenu" className="navmenu d-flex justify-content-center align-items-center">
              <ul className="d-flex align-items-center justify-content-center">
                <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
                <li><Link href="/resume" className={pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
                <li><Link href="/photos" className={pathname === '/photos' ? 'active' : ''}>Photos</Link></li>
                <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
              </ul>
            </nav>

            {/* Social links */}
            <div className="header-social-links">
              <a href="https://github.com/bhansea"
                 className="github"
                 target="_blank"
                 rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/brandon-luong-12-/" 
                 className="linkedin"
                 target="_blank"
                 rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer id="footer" className="footer light-background">
          <div className="container">
            <div className="copyright text-center">
              <p>
                © <span>Copyright</span>
                <strong className="px-1 sitename">Brandon.</strong>
                <span>All Rights Reserved.<br /></span>
              </p>
            </div>
            <div className="social-links d-flex justify-content-center">
              <a href="https://github.com/bhansea"
                 target="_blank"
                 rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-luong-12-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="credits">
              Designed by{" "}
              <a
                href="https://bootstrapmade.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
