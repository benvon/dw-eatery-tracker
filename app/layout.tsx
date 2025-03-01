import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DisneyWorld Eatery Tracker',
  description: 'Discover and track visits to eateries at Walt Disney World in Orlando, Florida',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div className="header-content">
            <h1 className="logo">DW Eatery Tracker</h1>
            <nav className="nav">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/eateries">Eateries</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} DisneyWorld Eatery Tracker</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 