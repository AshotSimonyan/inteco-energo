'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslations, useLocale } from 'next-intl';

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);

  const t = useTranslations('footer'); // Use 'footer' translation
  const nav = t.raw('nav'); // Get navigation links
  const lang = useLocale(); // Get the current language/locale

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
                        <Link href={`/${lang}`}>
                          <img
                            src='/assets/img/logo/IntecoEnergo_white.png'
                            className='img-fluid'
                            alt=''
                          />
                        </Link>
                      </div>
                      <div className='footer-desc'>{t('description')}</div>
                    </div>
                  </div>
                  <div className='col-xl-3 offset-xl-2 offset-lg-2 col-lg-3 col-md-4'>
                    {/* footer widget */}
                    <div className='footer-widget'>
                      <h4 className='footer-widget__title'>{t('usefulLinks')}</h4>
                      <ul className='footer-widget__navigation'>
                        <li>
                          <Link href={`/${lang}`}>{nav.home}</Link>
                        </li>
                        <li>
                          <Link href={`/${lang}/about-us`}>{nav.about}</Link>
                        </li>
                        <li>
                          <Link href={`/${lang}/services`}>{nav.services}</Link>
                        </li>
                        <li>
                          <Link href={`/${lang}/contact-us`}>{nav.contact}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-xl-3 offset-xl-1 col-lg-3 col-md-4'>
                    {/* footer widget */}
                    <div className='footer-widget mb-0'>
                      <h4 className='footer-widget__title'>{t('contactUs')}</h4>
                      <div className='footer-widget__content'>
                        <ul className='contact-details'>
                          <li>
                            <span>{t('addressLabel')}:</span> {t('address')}
                          </li>
                          <li>
                            <a href='tel:+37444001496'>
                              <span>{t('phoneLabel')}:</span> {t('phone')}
                            </a>
                          </li>
                          <li>
                            <a href='mailto:info@intecoenergo.am'>
                              <span>{t('emailLabel')}:</span> {t('email')}
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
            <p className='copyright-text'>
              &copy; {t('copyright')} {new Date().getFullYear()}
            </p>
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