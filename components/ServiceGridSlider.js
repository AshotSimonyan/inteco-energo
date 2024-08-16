'use client';
import React from 'react';
import SwiperSlider, { SwiperSlide } from './swiper';
import Link from 'next/link';

const ServiceGridSlider = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
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

  const data = [
    {
      img: 'service1.jpg',
      iconName: 'flaticon-015-cart',
      serviceTitle: 'Ենթակայանների աշխատանքներ',
      serviceExcerpt: 'Էլեկտրական ցանցերը կարևոր են արդյունաբերության և կապի համար։',
      serviceId: 1,
    },
    {
      img: 'service2.jpg',
      iconName: 'flaticon-010-tank-1',
      serviceTitle: 'Էլեկտրաֆիկացում',
      serviceExcerpt: 'Էլեկտրամատակարարման համակարգը հուսալի, անվտանգ և երկարատև է։',
      serviceId: 2,
    },
    {
      img: 'service3.jpg',
      iconName: 'flaticon-002-welding',
      serviceTitle: 'Մալուխային աշխատանքներ',
      serviceExcerpt: 'Ընկերությունն ունի հարուստ փորձ մալուխային աշխատանքներում։',
      serviceId: 3,
    },
  ];

  const DataList = data.map((val, i) => (
    <SwiperSlide key={i}>
      <div className='swiper-slide'>
        <div className='service-grid-item'>
          <div className='service-grid-item__image'>
            <div className='service-grid-item__image-wrapper'>
              <Link href={`/services/${val.serviceId}`}>
                <img src={`/assets/img/service/${val.img}`} className='img-fluid' alt='' />
              </Link>
            </div>
            <div className='icon'>
              <i className={val.iconName} />
            </div>
          </div>
          <div className='service-grid-item__content'>
            <h3 className='title'>
              <Link href={`/${val.serviceId}`}>{val.serviceTitle}</Link>
            </h3>
            <p className='subtitle'>{val.serviceExcerpt}</p>
            <Link href={`/services/${val.serviceId}`} className='see-more-link'>
              ՏԵՍՆԵԼ ԱՎԵԼԻՆ
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      {/*====================  service grid slider area ====================*/}
      <div className='service-grid-slider-area section-space--inner--120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area text-center'>
                <h2 className='section-title section-space--bottom--50'>
                  ՄԵՐ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԸ <span className='title-icon' />
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
      {/*====================  End of service grid slider area  ====================*/}
    </div>
  );
};

export default ServiceGridSlider;