'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const el = document.querySelector('nav');
    setTop(el.offsetTop);
    setHeight(el.offsetHeight);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > top) {
      document.getElementById('scroll-top').classList.add('show');
    } else {
      document.getElementById('scroll-top').classList.remove('show');
    }
  }, [scrollY, top]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {/*====================  footer area ====================*/}
      <div className='footer-area dark-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='footer-content-wrapper section-space--inner--100'>
                <div className='row'>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    {/* footer intro wrapper */}
                    <div className='footer-intro-wrapper'>
                      <div className='footer-logo'>
                        <Link href='/home-one'>
                          <img
                            src='/public/assets/img/logo/IntecoEnergo_white.png'
                            className='img-fluid'
                            alt=''
                          />
                        </Link>
                      </div>
                      <div className='footer-desc'>
                        «Ինտեկո Էներգո» ՓԲԸ՝ առաջատար շինարարական ընկերություն, որակյալ և հուսալի
                        էներգետիկ լուծումներով։
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 offset-xl-2 offset-lg-2 col-lg-3 col-md-4'>
                    {/* footer widget */}
                    <div className='footer-widget'>
                      <h4 className='footer-widget__title'>Օգտակար Հղումներ</h4>
                      <ul className='footer-widget__navigation'>
                        <li>
                          <Link href='/'>ԳԼԽԱՎՈՐ</Link>
                        </li>
                        <li>
                          <Link href='/about-us'>ՄԵՐ ՄԱՍԻՆ</Link>
                        </li>
                        <li>
                          <Link href='/services'>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link>
                        </li>
                        <li>
                          <Link href='/contact-us'>ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-xl-3 offset-xl-1 col-lg-3 col-md-4'>
                    {/* footer widget */}
                    <div className='footer-widget mb-0'>
                      <h4 className='footer-widget__title'>Կապ Մեզ Հետ</h4>
                      <div className='footer-widget__content'>
                        <ul className='contact-details'>
                          <li>
                            <span>Հասցե:</span>Վահրամ Փափազյան 8
                          </li>
                          <li>
                            <a href='tel:+37444001496'>
                              <span>հեռախոս:</span>+374 44 001 496
                            </a>
                          </li>
                          <li>
                            <a href='mailto:info@intecoenergo.am'>
                              <span>Էլ. հասցե:</span>info@intecoenergo.am
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-copyright-wrapper'>
          <div className='footer-copyright text-center'>
            <p className='copyright-text'>&copy; Ինտեկո Էներգո {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
      {/*====================  End of footer area  ====================*/}
      {/*====================  scroll top ====================*/}
      <button className='scroll-top' id='scroll-top' onClick={scrollToTop}>
        <i className='ion-android-arrow-up' />
      </button>
      {/*====================  End of scroll top  ====================*/}
    </div>
  );
};

export default Footer;
