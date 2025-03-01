import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to DisneyWorld Eatery Tracker</h1>
        <p className={styles.description}>
          Discover and track your visits to eateries at Walt Disney World in Orlando, Florida.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>Discover</h2>
            <p>Browse our catalog of Disney World restaurants and eateries.</p>
          </div>
          <div className={styles.feature}>
            <h2>Track</h2>
            <p>Create wishlists and track your experiences at each location.</p>
          </div>
          <div className={styles.feature}>
            <h2>Share</h2>
            <p>Write reviews and share your experiences with other Disney fans.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 