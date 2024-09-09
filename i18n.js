import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['hy', 'en', 'ru'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}/translation.json`)).default,
  };
});