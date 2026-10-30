import localFont from 'next/font/local';
import GroupHomepage from '@/components/GroupHomepage';
import styles from '@/components/GroupHomepage.module.css';
import StructuredData from '@/components/StructuredData';

const manrope = localFont({
  src: '../../public/fonts/Manrope.ttf',
  display: 'swap',
  weight: '200 800',
  variable: '--font-manrope',
  fallback: ['Arial', 'sans-serif'],
});

export default function Home() {
  return (
    <div className={`${styles.root} ${manrope.className} ${manrope.variable}`}>
      <StructuredData />
      <GroupHomepage />
    </div>
  );
}
