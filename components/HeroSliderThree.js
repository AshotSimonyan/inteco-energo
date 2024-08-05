'use client';
import React from 'react';
import SwiperSlider, { SwiperSlide } from './swiper';
import { EffectFade } from 'swiper/modules';
import Link from 'next/link';

const HeroSliderThree = () => {
  const params = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    navigation: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    modules: [EffectFade],
  };

  const data = [
    {
      bgImg: 'slider4.jpg',
      sliderTitle: 'Build Your Dream With Passion',
      sliderSubtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.',
      btnLink: 'contact-us-us',
    },
    {
      bgImg: 'slider5.jpg',
      sliderTitle: 'Build Your Dream With Passion',
      sliderSubtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.',
      btnLink: 'contact-us-us',
    },
  ];

  const DataList = data.map((val, i) => (
    <SwiperSlide key={i}>
      <div
        className='hero-slider__single-item'
        style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }}
      >
        <div className='hero-slider__content-wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='hero-slider__content m-auto text-center'>
                  <h2 className='hero-slider__title'>{val.sliderTitle}</h2>
                  <p className='hero-slider__text'>{val.sliderSubtitle}</p>
                  <Link
                    href={`/${val.btnLink}`}
                    className='hero-slider__btn hero-slider__btn--style2'
                  >
                    GET START
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      {/*====================  hero slider area ====================*/}
      <div className='hero-slider-area'>
        <SwiperSlider options={params}>{DataList}</SwiperSlider>
      </div>
      {/*====================  End of hero slider area  ====================*/}
    </div>
  );
};

export default HeroSliderThree;
