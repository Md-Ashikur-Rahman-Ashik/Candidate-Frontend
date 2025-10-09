import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '800'],
  variable: '--font-display',
});

export const metadata = {
  title: 'Election Candidate Homepage',
  description: 'Election Candidate Homepage.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${plusJakartaSans.variable} bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark`}
      >
        {children}
      </body>
    </html>
  );
}