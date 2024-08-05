'use client';
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Link from 'next/link';
import SwiperSlider from '@/components/swiper';

const MobileMenu = forwardRef((props, ref) => {
  const [active, setActive] = useState(false);

  const toggleMobileMenu = () => {
    setActive(!active);
  };

  useImperativeHandle(ref, () => ({
    toggleMobileMenu,
  }));

  useEffect(() => {
    // Handle sub-menu expansion
    const offCanvasNav = document.getElementById('offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');

    offCanvasNavSubMenu.forEach((subMenu) => {
      subMenu.insertAdjacentHTML('beforebegin', "<span class='menu-expand'><i></i></span>");
    });

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');

    const sideMenuExpand = function () {
      if (this.parentElement.classList.contains('active')) {
        this.parentElement.classList.remove('active');
      } else {
        menuExpand.forEach((expand) => {
          expand.parentElement.classList.remove('active');
        });
        this.parentElement.classList.add('active');
      }
    };

    menuExpand.forEach((expand) => {
      expand.addEventListener('click', sideMenuExpand);
    });

    // Handle outside clicks
    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu-overlay');
      if (menu && !menu.contains(event.target)) {
        setActive(false); // Close the menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up event listeners
      menuExpand.forEach((expand) => {
        expand.removeEventListener('click', sideMenuExpand);
      });
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/*=======  offcanvas mobile menu  =======*/}
      <div className={`offcanvas-mobile-menu ${active ? 'active' : ''}`} id='mobile-menu-overlay'>
        <button
          className='offcanvas-menu-close border-'
          id='mobile-menu-close-trigger'
          onClick={toggleMobileMenu}
        >
          <i className='ion-android-close' />
        </button>
        <div className='offcanvas-wrapper'>
          <div className='offcanvas-inner-content'>
            <nav className='offcanvas-navigation' id='offcanvas-navigation'>
              <ul>
                <li>
                  <Link href='/' onClick={toggleMobileMenu}>
                    ԳԼԽԱՎՈՐ
                  </Link>
                </li>
                <li>
                  <Link href='/about-us' onClick={toggleMobileMenu}>
                    ՄԵՐ ՄԱՍԻՆ
                  </Link>
                </li>
                <li>
                  <Link href='/services/1' onClick={toggleMobileMenu}>
                    ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
                  </Link>
                </li>
                <li>
                  <Link href='/contact-us' onClick={toggleMobileMenu}>
                    ՀԵՏԱԴԱՐՁ ԿԱՊ
                  </Link>{' '}
                </li>
              </ul>
            </nav>
            <div className='offcanvas-widget-area'>
              <div className='off-canvas-contact-widget'>
                <div className='header-contact-info'>
                  <ul className='header-contact-info__list'>
                    <li>
                      <i className='ion-android-phone-portrait' />{' '}
                      <a href='tel:+37444001496'>+374 44 001 496</a>
                    </li>
                    <li>
                      <i className='ion-android-mail' />{' '}
                      <a href='mailto:info@intecoenergo.am'>info@intecoenergo.am</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=======  End of offcanvas mobile menu  =======*/}
    </div>
  );
});
MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;