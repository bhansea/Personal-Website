// import Head from 'next/head';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="index-page">
//       <Head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Home Page</title>
//         <link rel="icon" href="/assets/img/favicon.png" />
//       </Head>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="transparent-box">
//           {/* Profile Image */}
//           <div className="profile-container">
//             <img
//               src="/assets/img/profile-im.jpg"
//               alt="Brandon Luong"
//               className="profile-image"
//             />
//           </div>
//           {/* Name and Description */}
//           <h2>Brandon Luong</h2>
//           <p>I'm an aspiring software engineer from Connecticut</p>
//           {/* Button */}
//           <a href="#" className="btn-get-started">
//             About Me
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

import Image from 'next/image';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <div style={styles.profileImage}>
            <Image
              src="/assets/img/profile-img.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              style={{ borderRadius: '50%' }}
            />
          </div>
          <h1 style={styles.name}>Brandon Luong</h1>
          <p style={styles.subTitle}>Aspiring software engineer from Farmington, Connecticut</p>
          <button style={styles.button}>ABOUT ME</button>
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
  subTitle: {
    fontSize: '24px',
    margin: '10px 0',
    fontFamily: "'Roboto', sans-serif",
  },
  button: {
    padding: '12px 40px', // top right bottom left
    marginBottom: '30px',
    marginTop: '25px',
    backgroundColor: '#34b7a7',
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
