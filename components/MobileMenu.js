'use client';
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import LanguagePicker from '@/components/Language/Language';

const MobileMenu = forwardRef((props, ref) => {
  const [active, setActive] = useState(false);
  const lang = useLocale(); // Get the current language
  const t = useTranslations('header'); // Use 'header' translation group

  const nav = t.raw('nav'); // Get navigation items
  const phoneLabel = t('phone');
  const addressLabel = t('address.label');
  const addressValue = t('address.value');

  const toggleMobileMenu = () => {
    setActive(!active);
  };

  useImperativeHandle(ref, () => ({
    toggleMobileMenu,
  }));

  useEffect(() => {
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

    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu-overlay');
      if (menu && !menu.contains(event.target)) {
        setActive(false); // Close the menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
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
          className='offcanvas-menu-close'
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
                  <Link href={`/${lang}`} onClick={toggleMobileMenu}>
                    {nav.home}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/about-us`} onClick={toggleMobileMenu}>
                    {nav.about}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/services/1`} onClick={toggleMobileMenu}>
                    {nav.services}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/contact-us`} onClick={toggleMobileMenu}>
                    {nav.contact}
                  </Link>
                </li>
              </ul>
            </nav>
            <LanguagePicker />
            <div className='offcanvas-widget-area'>
              <div className='off-canvas-contact-widget'>
                <div className='header-contact-info'>
                  <ul className='header-contact-info__list'>
                    <li>
                      <i className='ion-android-phone-portrait' />{' '}
                      <a href='tel:+37444001496'>+374 44 001 496</a> {phoneLabel}
                    </li>
                    <li>
                      <i className='ion-android-mail' />{' '}
                      <a href='mailto:info@intecoenergo.am'>info@intecoenergo.am</a>{' '}
                      {t('emailLabel')}
                    </li>
                    <li>
                      <i className='ion-android-home' /> {addressLabel}: {addressValue}
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