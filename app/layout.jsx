import './globals.css';
import HashScroll from '@/components/HashScroll';

export const metadata = {
  title: 'Château — Cupon Tours',
  description:
    'Invest in Lost Boy Hospitality Ventures as we expand our proven neighborhood bar concept across South Florida.',
  openGraph: {
    title: 'Château — Cupon Tours',
    description:
      'Invest in Lost Boy Hospitality Ventures as we expand our proven neighborhood bar concept across South Florida.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HashScroll />
        {children}
      </body>
    </html>
  );
}
