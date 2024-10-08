import React from 'react';

export default function NotFoundPage() {
  return (
    <main style={styles.main}>
      <div style={styles.errorContainer}>
        <span style={styles.errorCode}>Oops!</span>
        <span style={styles.errorMessage}>Sorry, this page is still being developed. Come back soon!</span>
      </div>
    </main>
  );
}

const styles = {
  main: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '18px',
  },
  errorCode: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#555',
  },
  errorMessage: {
    fontSize: '18px',
    color: '#777',
  },
};
