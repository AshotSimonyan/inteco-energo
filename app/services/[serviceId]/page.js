import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import React from 'react';
import ServiceTab from '@/components/ServiceTab/ServiceTab';
import { serviceData } from '@/components/ServiceTab/ServiceTabData';

const Page = ({ params }) => {
  const serviceId = +params.serviceId;

  const serviceDetails = serviceData[serviceId];

  return (
    <div>
      {/* breadcrumb */}
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
                <h1>Ծառայութույուններ</h1>
                <ul className='page-breadcrumb'>
                  <li>
                    <Link href='/'>Գլխավոր</Link>
                  </li>
                  <li>Ծառայութույուններ</li>
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
                <Sidebar serviceId={serviceId} />
              </div>
            </div>
          </div>
        </div>
        {/*Service section end*/}
      </div>
    </div>
  );
};

export default Page;