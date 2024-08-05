import { Inter } from 'next/font/google';
import '@/assets/scss/style.scss';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ինտեկո Էներգո | Առաջատար Էներգետիկ Շինարարական Ընկերություն Հայաստանում',
  description:
    'Ինտեկո Էներգո ՓԲԸ՝ որակյալ և հուսալի էներգետիկ լուծումներ, մասնագիտացված շինարարական ծառայություններ Հայաստանում և Արցախում: Հուսալի էլեկտրամատակարարում, էներգիայի կորուստների նվազեցում և ժամանակակից տեխնոլոգիաներ:',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}