import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="index-page">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>

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

      <section id="hero" className="hero">
        <Image src="/assets/img/hero-bg.jpg" alt="Hero Background" layout="fill" objectFit="cover" />
        <div className="container text-center">
          <div className="transparent-box">
            <Image src="/assets/img/profile-img.jpg" alt="Brandon Luong" width={200} height={200} className="profile-image" />
            <h2>Brandon Luong</h2>
            <p>I&apos;m an aspiring software engineer from Connecticut</p>
            <Link href="/about" className="btn-get-started">About Me</Link>
          </div>
        </div>
      </section>

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
    </div>
  );
}
