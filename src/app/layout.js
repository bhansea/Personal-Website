import localFont from "next/font/local";
import '../styles/globals.css';
import Link from 'next/link';



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header id="header" className="header sticky-top">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <Link href="/">
              <h1 className="sitename">Brandon</h1>
            </Link>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><Link href="/" className="active">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/photos">Photos</Link></li>
                <li className="dropdown">
                  <a href="#"><span>Dropdown</span></a>
                </li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="container">
            <p>© Brandon. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </footer>

        <a href="#" id="scroll-top" className="scroll-top">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </body>
    </html>
  );
}
