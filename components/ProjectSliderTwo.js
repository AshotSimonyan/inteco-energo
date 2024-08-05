'use client';
import React from 'react';
import SwiperSlider, { SwiperSlide } from './swiper';
import Link from 'next/link';

const ServiceGridSlider = () => {
  const params = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
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
      serviceTitle: 'Land Minning',
      serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
      serviceUrl: 'service-details-left-sidebar',
    },
    {
      img: 'service2.jpg',
      serviceTitle: 'Work Management',
      serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
      serviceUrl: 'service-details-left-sidebar',
    },
    {
      img: 'service3.jpg',
      serviceTitle: 'Material Engineering',
      serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
      serviceUrl: 'service-details-left-sidebar',
    },
    {
      img: 'service1.jpg',
      serviceTitle: 'Power and Energy',
      serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
      serviceUrl: 'service-details-left-sidebar',
    },
  ];

  const DataList = data.map((val, i) => (
    <SwiperSlide className='swiper-slide' key={i}>
      <div className='service-grid-item service-grid-item--style2'>
        <div className='service-grid-item__image'>
          <div className='service-grid-item__image-wrapper'>
            <Link href={`/${val.serviceUrl}`}>
              <img src={`/assets/img/service/${val.img}`} className='img-fluid' alt='' />
            </Link>
          </div>
        </div>
        <div className='service-grid-item__content'>
          <h3 className='title'>
            <Link href={`/${val.serviceUrl}`}>{val.serviceTitle}</Link>
          </h3>
          <p className='subtitle'>{val.serviceExcerpt}</p>
          <Link href={`/${val.serviceUrl}`} className='see-more-link'>
            SEE MORE
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      {/*====================  project grid slider area ====================*/}
      <div className='service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area text-center'>
                <h2 className='section-title mb-0'>
                  Latest Projects <span className='title-icon' />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='service-grid-slider-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='service-slider'>
                <div className='service-slider__container service-slider__container--style2'>
                  <SwiperSlider options={params}>{DataList}</SwiperSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of project grid slider area  ====================*/}
    </div>
  );
};

export default ServiceGridSlider;
