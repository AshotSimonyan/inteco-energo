import React from 'react';
import Link from 'next/link';

const Sidebar = ({ serviceId }) => {
  const data = [
    {
      img: 'service1.jpg',
      iconName: 'flaticon-015-cart',
      serviceTitle: 'Ենթակայանների աշխատանքներ',
      serviceExcerpt: 'Էլեկտրական ցանցերը կարևոր են արդյունաբերության և կապի համար։',
      serviceId: 1,
    },
    {
      img: 'service3.jpg',
      iconName: 'flaticon-010-tank-1',
      serviceTitle: 'Էլեկտրաֆիկացում',
      serviceExcerpt: 'Էլեկտրամատակարարման համակարգը հուսալի, անվտանգ և երկարատև է։',
      serviceId: 2,
    },
    {
      img: 'service2.jpg',
      iconName: 'flaticon-002-welding',
      serviceTitle: 'Մալուխային աշխատանքներ',
      serviceExcerpt: 'Ընկերությունն ունի հարուստ փորձ մալուխային աշխատանքներում։',
      serviceId: 3,
    },
  ];

  console.log('serviceId-', serviceId);
  const Datalist = data.map((val, i) => (
    <li key={i}>
      <Link
        className={serviceId === val.serviceId ? 'active-tab' : ''}
        href={`/services/${val.serviceId}`}
        scroll={false}
      >
        <i className={val.iconName} />
        {val.serviceTitle}
      </Link>
    </li>
  ));

  return (
    <div>
      <div className='sidebar-wrapper'>
        <div className='sidebar'>
          <h3 className='sidebar-title'>Ծառայութույուններ</h3>
          <ul className='sidebar-list'>{Datalist}</ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
