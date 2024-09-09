import React from 'react';
import { Inter } from 'next/font/google';
import '@/assets/scss/style.scss';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Ինտեկո Էներգո | Առաջատար Էներգետիկ Շինարարական Ընկերություն Հայաստանում',
//   description:
//     'Ինտեկո Էներգո ՓԲԸ՝ որակյալ և հուսալի էներգետիկ լուծումներ, մասնագիտացված շինարարական ծառայություններ Հայաստանում և Արցախում: Հուսալի էլեկտրամատակարարում, էներգիայի կորուստների նվազեցում և ժամանակակից տեխնոլոգիաներ:',
// };

export const generateMetadata = async ({ locale }) => {
  const t = await getTranslations(locale);

  // Generate dynamic metadata based on translations
  const metaTitle = t('meta.title');
  const metaDescription = t('meta.description');

  return {
    title: metaTitle,
    description: metaDescription,
  };
};
export default async function RootLayout({ children }) {
  const messages = await getMessages();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}