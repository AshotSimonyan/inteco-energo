'use client';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Funfact = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  const data = [
    { img: 'funfact-project.png', countNum: 598, countTitle: 'Projects' },
    { img: 'funfact-clients.png', countNum: 128, countTitle: 'Clients' },
    { img: 'funfact-success.png', countNum: 114, countTitle: 'Success' },
    { img: 'funfact-award.png', countNum: 109, countTitle: 'Awards' },
  ];

  const DataList = data.map((val, i) => (
    <div className='single-fact col-md-3 col-6 section-space--bottom--30' key={i}>
      <img src={`/assets/img/icons/${val.img}`} alt='' />
      <h1 className='counter'>
        <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
          <CountUp end={didViewCountUp ? val.countNum : 0} />
        </VisibilitySensor>
      </h1>
      <h4>{val.countTitle}</h4>
    </div>
  ));

  return (
    <div>
      {/*====================  fun fact area ====================*/}
      <div
        className='funfact-section section-space--inner--100 funfact-bg'
        style={{
          backgroundImage: `url(/assets/img/backgrounds/funfact-bg.jpg)`,
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='fun-fact-wrapper'>
                <div className='row'>{DataList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of fun fact area  ====================*/}
    </div>
  );
};

export default Funfact;
