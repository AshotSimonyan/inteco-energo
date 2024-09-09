'use client';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const About = () => {
  const t = useTranslations('aboutPage');
  const lang = useLocale(); // Fetch the current language

  return (
    <div>
      {/* breadcrumb */}
      <div
        className='breadcrumb-area breadcrumb-bg'
        style={{ backgroundImage: `url(/assets/img/backgrounds/about.jpg)` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='page-banner text-center'>
                <h1>{t('sections.aboutUs.title')}</h1>
                <ul className='page-breadcrumb'>
                  <li>
                    <Link href={`/${lang}`}>{t('breadcrumb.home')}</Link>
                  </li>
                  <li>{t('breadcrumb.about')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of breadcrumb area  ====================*/}

      {/* About section start */}
      <div className='about-section section-space--inner--120'>
        <div className='container'>
          <div className='about-wrapper row'>
            <div className='col-sm-6 col-12 order-1 order-lg-2'>
              <div className='about-image about-image-1'>
                <img src='/assets/img/about/about-1.jpg' alt='' />
              </div>
            </div>
            <div className='col-sm-6 col-12 order-2 order-lg-3'>
              <div className='about-image about-image-2'>
                <img src='/assets/img/about/about-2.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-6 col-12 order-3 order-lg-1'>
              <div className='about-content about-content-1'>
                <h1>{t('sections.aboutUs.title')}</h1>
                <p>{t('sections.aboutUs.content')}</p>
              </div>
            </div>
            <div className='col-lg-6 col-12 order-4'>
              <div className='about-content about-content-2'>
                <h1>{t('sections.mission.title')}</h1>
                <ul>
                  {t.raw('sections.mission.list').map((item, index) => (
                    <li key={index}>
                      <strong>{item.strong}</strong> {item.content}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${lang}/contact-us`}
                  className='ht-btn ht-btn--round ht-btn--default--dark-hover section-space--top--20'
                >
                  {t('contactButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About section end */}
    </div>
  );
};

export default About;