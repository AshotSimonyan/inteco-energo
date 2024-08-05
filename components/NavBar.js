'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const mobileMenuElement = useRef(null);

  const activeMobileMenu = () => {
    if (mobileMenuElement.current) {
      mobileMenuElement.current.toggleMobileMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
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
    if (scroll > top) {
      document.body.style.paddingTop = `${height}px`;
    } else {
      document.body.style.paddingTop = 0;
    }
  }, [scroll, top, height]);

  return (
    <div>
      {/*====================  header area ====================*/}
      <div
        className={`header-area header-sticky header-sticky--default ${
          scroll > top ? 'is-sticky' : ''
        }`}
      >
        <div className='header-area__desktop header-area__desktop--default'>
          {/*=======  header info area  =======*/}
          <div className='header-info-area'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-12'>
                  <div className='header-info-wrapper align-items-center'>
                    {/* logo */}
                    <div className='logo'>
                      <Link href='/'>
                        <img
                          src='/assets/img/logo/IntecoEnergo.png'
                          className='img-fluid'
                          alt='Logo'
                        />
                      </Link>
                    </div>
                    {/* header contact-us info */}
                    <div className='header-contact-info'>
                      <div className='header-info-single-item'>
                        <div className='header-info-single-item__icon'>
                          <i className='zmdi zmdi-smartphone-android' />
                        </div>
                        <div className='header-info-single-item__content'>
                          <h6 className='header-info-single-item__title'>Հեռախո</h6>
                          <p className='header-info-single-item__subtitle'>
                            <a href='tel:+37444001496'>+374 44 001 496</a>
                          </p>
                        </div>
                      </div>
                      <div className='header-info-single-item'>
                        <div className='header-info-single-item__icon'>
                          <i className='zmdi zmdi-home' />
                        </div>
                        <div className='header-info-single-item__content'>
                          <h6 className='header-info-single-item__title'>Հասցե</h6>
                          <p className='header-info-single-item__subtitle'>Վահրամ Փափազյան 8</p>
                        </div>
                      </div>
                    </div>
                    {/* mobile menu */}
                    <div
                      className='mobile-navigation-icon'
                      id='mobile-menu-trigger'
                      onClick={activeMobileMenu}
                    >
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of header info area =======*/}
          {/*=======  header navigation area  =======*/}
          <div className='header-navigation-area default-bg'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  {/* header navigation */}
                  <div className='header-navigation header-navigation--header-default position-relative'>
                    <div className='header-navigation__nav position-static'>
                      <nav>
                        <ul>
                          <li>
                            <Link href='/'>ԳԼԽԱՎՈՐ</Link>
                          </li>
                          <li>
                            <Link href='/about-us'>ՄԵՐ ՄԱՍԻՆ</Link>
                          </li>
                          <li>
                            <Link href='/services/1'>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link>
                          </li>
                          <li>
                            <Link href='/contact-us'>ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>{' '}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of header navigation area =======*/}
        </div>
      </div>
      {/*====================  End of header area  ====================*/}

      {/* Mobile Menu */}
      <MobileMenu ref={mobileMenuElement} />
    </div>
  );
};

export default NavBar;