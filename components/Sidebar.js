import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const Sidebar = ({ sidebarData, currentServiceId }) => {
  const lang = useLocale();

  const Datalist = sidebarData.serviceList.map((val, i) => (
    <li key={i}>
      <Link
        className={currentServiceId === val.serviceId ? 'active-tab' : ''}
        href={`/${lang}/services/${val.serviceId}`}
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
          <h3 className='sidebar-title'>{sidebarData.title}</h3>
          <ul className='sidebar-list'>{Datalist}</ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;