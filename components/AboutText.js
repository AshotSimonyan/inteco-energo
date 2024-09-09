'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const AboutText = () => {
  const t = useTranslations('homepage.about'); // 'homepage.about' refers to the correct path in the JSON
  const projectList = t.raw('projectList'); // Ensure this is an array

  return (
    <div>
      {/*====================  about-us text area ====================*/}
      <div className='about-text-area grey-bg section-space--inner--120'>
        <div className='container'>
          <div className='about-content'>
            <h2 className='about_title section-title section-space--bottom--50'>
              {t('title')} {/* Fetching the title dynamically */}
            </h2>
            <ul className='about_list'>
              {projectList.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/*====================  End of about-us text area  ====================*/}
    </div>
  );
};

export default AboutText;