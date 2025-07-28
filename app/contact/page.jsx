import Contact from '@/components/contact/Contact';
import HeaderBg from '@/components/headers/HeaderBg';
import Header from '@/components/headers/Header';
import PersonalInfo from '@/components/personalInfo/PersonalInfo';

import React from 'react';
export const metadata = {
  title: 'Contact || LP Shahim',
  description: 'Get in touch!',
};
export default function page() {
  return (
    <>
      <div className='page-wrapper home-3'>
        <HeaderBg />
        <div className='container z-index-3'>
          <div className='row'>
            <PersonalInfo />
            <div className='col-xxl-8 col-xl-8 col-lg-8'>
              <Header />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
