'use client';
import React from 'react';
import SwiperSlider, { SwiperSlide } from './swiper';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const ServiceGridSlider = () => {
  const t = useTranslations('homepage.services'); // 'homepage.services' refers to the translation key
  const locale = useLocale(); // Get the current locale
  const params = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };

  const data = t.raw('serviceList'); // Retrieve service list data

  const DataList = data.map((val, i) => (
    <SwiperSlide key={i}>
      <div className='swiper-slide'>
        <div className='service-grid-item'>
          <div className='service-grid-item__image'>
            <div className='service-grid-item__image-wrapper'>
              <Link href={`/${locale}/services/${val.serviceId}`}>
                <img src={`/assets/img/service/${val.img}`} className='img-fluid' alt='' />
              </Link>
            </div>
            <div className='icon'>
              <i className={val.iconName} />
            </div>
          </div>
          <div className='service-grid-item__content'>
            <h3 className='title'>
              <Link href={`/${locale}/services/${val.serviceId}`}>{val.serviceTitle}</Link>
            </h3>
            <p className='subtitle'>{val.serviceExcerpt}</p>
            <Link href={`/${locale}/services/${val.serviceId}`} className='see-more-link'>
              {t('seeMore')}
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      <div className='service-grid-slider-area section-space--inner--120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area text-center'>
                <h2 className='section-title section-space--bottom--50'>
                  {t('title')} <span className='title-icon' />
                </h2>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='service-slider'>
                <SwiperSlider options={params}>{DataList}</SwiperSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGridSlider;