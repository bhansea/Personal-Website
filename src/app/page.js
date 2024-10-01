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

      {/* Hero Section */}
      <section id="hero" className="hero" data-aos="fade-in">
        <Image src="/assets/img/hero-bg.jpg" alt="Hero Background" layout="fill" objectFit="cover" />
        <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
          <div className="transparent-box">
            <Image src="/assets/img/profile-img.jpg" alt="Brandon Luong" width={200} height={200} className="profile-image" />
            <h2>Brandon Luong</h2>
            <p>I&apos;m an aspiring software engineer from Connecticut</p>
            <Link href="/about" className="btn-get-started">About Me</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
