'use client';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';

const ServiceTabTwo = () => {
  /* service tab menu */
  const serviceTabMenuData = [
    { iconName: 'flaticon-002-welding', tabMenuName: 'Land Mining' },
    { iconName: 'flaticon-004-walkie-talkie', tabMenuName: 'Work Management' },
    { iconName: 'flaticon-015-cart', tabMenuName: 'Material Engineering' },
    { iconName: 'flaticon-010-tank-1', tabMenuName: 'Power and Energy' },
  ];

  const serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => (
    <Tab key={i}>
      <span className='icon'>
        <i className={val.iconName} />
      </span>
      <span className='text'>{val.tabMenuName}</span>
    </Tab>
  ));

  /* service tab content */
  const serviceTabContentData = [
    {
      bgUrl: 'service-tab1.jpg',
      contentTitle: 'Land Mining',
      contentDesc:
        'Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      serviceLink: 'service-details-left-sidebar',
    },
    {
      bgUrl: 'service-tab1.jpg',
      contentTitle: 'Work Management',
      contentDesc:
        'Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      serviceLink: 'service-details-left-sidebar',
    },
    {
      bgUrl: 'service-tab1.jpg',
      contentTitle: 'Material Engineering',
      contentDesc:
        'Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      serviceLink: 'service-details-left-sidebar',
    },
    {
      bgUrl: 'service-tab1.jpg',
      contentTitle: 'Power and Energy',
      contentDesc:
        'Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      serviceLink: 'service-details-left-sidebar',
    },
  ];

  const serviceTabContentDatalist = serviceTabContentData.map((val, i) => (
    <TabPanel key={i}>
      <div
        className='service-tab__single-content-wrapper'
        style={{ backgroundImage: `url(/assets/img/backgrounds/${val.bgUrl})` }}
      >
        <div className='service-tab__single-content'>
          <h3 className='service-tab__title'>{val.contentTitle}</h3>
          <p className='service-tab__text'>{val.contentDesc}</p>
          <Link href={`/${val.serviceLink}`} className='see-more-link'>
            SEE MORE
          </Link>
        </div>
      </div>
    </TabPanel>
  ));

  return (
    <div>
      {/*====================  service tab area ====================*/}
      <div className='service-tab-area section-space--inner--120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {/* section title */}
              <div className='section-title-area text-center section-space--bottom--50'>
                <h2 className='section-title'>Our Services</h2>
                <p className='section-subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>
            </div>
            <div className='col-lg-12'>
              {/* service tab wrapper */}
              <div className='service-tab-wrapper'>
                <Tabs>
                  <div className='row no-gutters'>
                    <div className='col-md-4'>
                      <TabList>
                        <div className='service-tab__link-wrapper'>{serviceTabMenuDatalist}</div>
                      </TabList>
                    </div>

                    <div className='col-md-8'>{serviceTabContentDatalist}</div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of service tab area  ====================*/}
    </div>
  );
};

export default ServiceTabTwo;
