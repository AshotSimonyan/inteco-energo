'use client';
import React from 'react';
import Link from 'next/link';
import SwiperSlider, { SwiperSlide } from './swiper';

const BrandLogoSlider = ({ background }) => {
  const params = {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  };

  const data = [
    { img: '1.png', logoLink: '/' },
    { img: '2.png', logoLink: '/' },
    { img: '3.png', logoLink: '/' },
    { img: '4.png', logoLink: '/' },
    { img: '1.png', logoLink: '/' },
    { img: '2.png', logoLink: '/' },
    { img: '3.png', logoLink: '/' },
    { img: '4.png', logoLink: '/' },
  ];

  const DataList = data.map((val, i) => (
    <SwiperSlide key={i}>
      <div className='brand-logo-slider__single'>
        <div className='image text-center'>
          <Link href={val.logoLink}>
            <img src={`/assets/img/brand-logo/${val.img}`} className='img-fluid' alt='' />
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      {/*====================  brand logo area ====================*/}
      <div className={`brand-logo-slider-area section-space--inner--60 ${background}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {/* brand logo slider */}
              <div className='brand-logo-slider__container-area'>
                <SwiperSlider options={params}>{DataList}</SwiperSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of brand logo area  ====================*/}
    </div>
  );
};

export default BrandLogoSlider;
