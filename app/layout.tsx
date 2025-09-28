
import '../app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fake Store App',
  description: 'Next.js app using Fake Store API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
     
        <main>{children}</main>
      </body>
    </html>
  );
}

