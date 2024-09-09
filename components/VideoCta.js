'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const VideoCta = () => {
  const t = useTranslations('homepage.videoCta');
  const locale = useLocale(); // Get the current locale

  return (
    <div>
      {/*====================  video cta area ====================*/}
      <div className='video-cta-area section-space--inner--120 grey-bg'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <div className='video-cta-content'>
                <h4 className='video-cta-content__small-title'>{t('smallTitle')}</h4>
                <h3 className='video-cta-content__title'>{t('title')}</h3>
                <p className='video-cta-content__text'>{t('text')}</p>
                <Link href={`/${locale}/about-us`} className='see-more-link'>
                  {t('seeMore')}
                </Link>
              </div>
            </div>
            <div className='col-lg-5 offset-lg-1 col-md-6'>
              <div className='cta-video-image'>
                <div className='video-popup'>
                  <div className='cta-video-image__image'>
                    <img src='/assets/img/backgrounds/about-bg.jpg' className='img-fluid' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of video cta area  ====================*/}
    </div>
  );
};

export default VideoCta;