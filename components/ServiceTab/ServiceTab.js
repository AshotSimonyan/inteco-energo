import React from 'react';
import { serviceData } from '@/components/ServiceTab/ServiceTabData';

const ServiceTabs = ({ serviceDetails }) => {
  console.log(serviceDetails);
  return (
    <div className='service-details'>
      <div className='item'>
        <img
          src={`/assets/img/service/${serviceDetails.img}`}
          className='img-fluid'
          alt='gallery data'
        />
      </div>

      <div className='content section-space--top--30'>
        <div className='row'>
          <div className='col-12'>
            <h2>{serviceDetails.title}</h2>
            <p>{serviceDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
