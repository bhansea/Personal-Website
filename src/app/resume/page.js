import React from 'react';
import Head from 'next/head';

const Resume = () => {
  return (
    <>
        <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Resume</title>
                    <meta name="description" content="My most recent resume" />
                    <meta name="keywords" content="resume, brandon, contact, experience, qualifications" />
                    <link href="/assets/img/favicon.png" rel="icon" />
                    <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        </Head>
        
        <section id="about" className="about section" style={{paddingBottom: '0px'}}>
            <div className="container section-title" data-aos="fade-up" style={{ paddingBottom: '10px' }}>
                <h2>Resume</h2>
                <p>Send inquiries to my email <a href="mailto:bvluong@wpi.edu">bvluong@wpi.edu</a></p>    

                <iframe
                    src="/assets/BrandonLuong_resume.pdf"
                    width="100%"
                    height="1000px"
                    style={{ border: 'none', margin: '30px 0px' }}
                    title="Resume PDF"
                />
            </div>
        </section>
    </>
  );
};

export default Resume;
