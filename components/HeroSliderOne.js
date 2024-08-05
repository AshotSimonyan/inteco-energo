'use client';
import React from 'react';
import SwiperSlider, { SwiperSlide } from './swiper';
import Link from 'next/link';

const HeroSliderOne = () => {
  const params = {
    slidesPerView: 1,
    loop: true,
    navigation: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  };

  return (
    <div>
      {/*====================  hero slider area ====================*/}
      <div className='hero-slider-area'>
        <div
          className='hero-slider__single-item'
          style={{ backgroundImage: `url(/assets/img/slider/slider1.jpg)` }}
        >
          <div className='hero-slider__content-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='hero-slider__content'>
                    <h2 className='hero-slider__title'>Հուսալի Էներգիա՝ Ձեր ապագայի համար</h2>
                    {/*<p className="hero-slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.</p>*/}
                    <Link href='/contact-us' className='hero-slider__btn'>
                      Կապ մեզ հետ
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
