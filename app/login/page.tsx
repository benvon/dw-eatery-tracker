import React from 'react';
import styles from './login.module.css';

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.description}>
            Sign in to track your Disney World eatery experiences.
          </p>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="your.email@example.com" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                required 
              />
            </div>
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Forgot password?</a>
            <a href="#" className={styles.link}>Create an account</a>
          </div>
          <div className={styles.comingSoon}>
            <p>Note: Authentication functionality is coming soon!</p>
          </div>
        </div>
      </div>
    </main>
  );
} 