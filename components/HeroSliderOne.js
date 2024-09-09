'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const HeroSliderOne = () => {
  const t = useTranslations('homepage.slider'); // Assuming the translations are under 'homepage.slider'
  const locale = useLocale(); // Get the current locale

  return (
    <div>
      {/*====================  hero slider area ====================*/}
      <div className='hero-slider-area'>
        <div
          className='hero-slider__single-item'
          style={{ backgroundImage: `url(/assets/img/slider/banner.png)` }}
        >
          <div className='hero-slider__content-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='hero-slider__content'>
                    <h2 className='hero-slider__title'>{t('title')}</h2>
                    <Link href={`/${locale}/contact-us`} className='hero-slider__btn'>
                      {t('contactButton')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of hero slider area  ====================*/}
    </div>
  );
};

export default HeroSliderOne;