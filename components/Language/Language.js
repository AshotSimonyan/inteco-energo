'use client';
import React from 'react';
import styles from './Language.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'hy', label: 'ՀԱՅ' },
  { code: 'en', label: 'ENG' },
  { code: 'ru', label: 'РУС' },
];

const LanguagePicker = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = useLocale();

  // Extract the current language from the first segment of the pathname
  const currentLang = pathname.split('/')[1];

  const handleLanguageChange = (lang) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = lang; // Replace the language part of the URL
    const newPath = `/${segments.join('/')}`;

    // Preserve search parameters (if any)
    const query = searchParams.toString();
    const finalPath = query ? `${newPath}?${query}` : newPath;

    router.push(finalPath);
    router.refresh();
  };

  return (
    <div className={`${styles.languagePicker} languages`}>
      {languages
        .filter((language) => language.code !== currentLang) // Filter out the active language
        .map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={styles.languageButton}
          >
            {language.label}
          </button>
        ))}
    </div>
  );
};

export default LanguagePicker;