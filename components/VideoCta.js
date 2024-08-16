'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const VideoCta = () => {
  return (
    <div>
      {/*====================  video cta area ====================*/}
      <div className='video-cta-area section-space--inner--120 grey-bg'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <div className='video-cta-content'>
                <h4 className='video-cta-content__small-title'>Մեր մասին</h4>
                <h3 className='video-cta-content__title'>
                  Հայաստանի խոշոր շինարարական ընկերություններից մեկը
                </h3>
                <p className='video-cta-content__text'>
                  Հայաստանի խոշոր շինարարական ընկերություններից մեկը «Ինտեկո Էներգո» ՓԲԸ-ն,
                  հիմնադրված 2017-ին, իրականացնում է բազմաբնույթ շինարարական աշխատանքներ բնակելի,
                  հասարակական և էներգետիկ ոլորտներում՝ հանդիսանալով Հայաստանի Էլեկտրական Ցանցերի
                  հիմնական կապալառու։
                </p>
                <Link href='/about-us' className='see-more-link'>
                  ՏԵՍՆԵԼ ԱՎԵԼԻՆ
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