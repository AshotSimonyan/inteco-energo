import React from 'react';

const FeatureIcon = ({ background }) => {
  const data = [
    {
      featureIcon: 'feature-2.png',
      featureTitle: 'Որակ',
      featureDescription: 'Մենք ձգտում ենք ապահովել բարձր որակ բոլոր մեր ծառայություններում:',
    },
    {
      featureIcon: 'feature-1.png',
      featureTitle: 'Հուսալիություն',
      featureDescription: 'Հաճախորդների վստահությունը մեր առաջնահերթությունն է:',
    },
    {
      featureIcon: 'feature-3.png',
      featureTitle: 'Անվտանգություն',
      featureDescription:
        'Ապահովում ենք բարձր մակարդակի անվտանգություն մեր բոլոր նախագծերում եւ ծառայություններում:',
    },
  ];

  const Datalist = data.map((val, i) => (
    <div className='col-lg-4 col-md-6 col-12 section-space--bottom--30' key={i}>
      <div className='feature'>
        <div className='icon'>
          <img src={`/assets/img/icons/${val.featureIcon}`} className='img-fluid' alt='' />
        </div>
        <div className='content'>
          <h3>{val.featureTitle}</h3>
          <p>{val.featureDescription}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      {/* Feature section start */}
      <div className={`feature-section section-space--inner--100 ${background}`}>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='feature-item-wrapper'>
              <div className='row'>{Datalist}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature section end */}
    </div>
  );
};

export default FeatureIcon;
