'use client';
import React from 'react';
import Link from 'next/link';

const HeroSliderOne = () => {
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