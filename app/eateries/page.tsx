import React from 'react';
import styles from './eateries.module.css';

export default function Eateries() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Eateries at Walt Disney World</h1>
        <p className={styles.description}>
          Browse our catalog of restaurants and food locations at Walt Disney World.
        </p>
        <div className={styles.comingSoon}>
          <h2>Coming Soon!</h2>
          <p>We're working hard to bring you a comprehensive list of all eateries at Walt Disney World.</p>
          <p>Check back soon for updates!</p>
        </div>
      </div>
    </main>
  );
} 