'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import React from 'react';
import ServiceTab from '@/components/ServiceTab/ServiceTab';
import { useTranslations, useLocale } from 'next-intl';

const ServicePage = ({ params }) => {
  const serviceId = +params.serviceId;
  const t = useTranslations('servicePage');
  const lang = useLocale();

  // Accessing the service data and sidebar from translations
  const serviceDetails = t.raw(`serviceData.${serviceId}`);
  const sidebarData = t.raw('sidebar');

  return (
    <div>
      {/*====================  breadcrumb area ====================*/}
      <div
        className='breadcrumb-area breadcrumb-bg'
        style={{
          backgroundImage: `url(/assets/img/backgrounds/service-bg.jpg)`,
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='page-banner text-center'>
                <h1>{t('breadcrumb.services')}</h1>
                <ul className='page-breadcrumb'>
                  <li>
                    <Link href={`/${lang}`}>{t('breadcrumb.home')}</Link>
                  </li>
                  <li>{t('breadcrumb.services')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of breadcrumb area  ====================*/}

      <div className='page-wrapper section-space--inner--120'>
        {/*Service section start*/}
        <div className='service-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-12 order-1 order-lg-2'>
                <ServiceTab serviceDetails={serviceDetails} />
              </div>
              <div className='col-lg-4 col-12 order-2 order-lg-1'>
                <Sidebar sidebarData={sidebarData} currentServiceId={serviceId} />
              </div>
            </div>
          </div>
        </div>
        {/*Service section end*/}
      </div>
    </div>
  );
};

export default ServicePage;