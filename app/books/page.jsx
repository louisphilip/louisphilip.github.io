import Books from '@/components/books/Books';
import HeaderBg from '@/components/headers/HeaderBg';
import Header from '@/components/headers/Header';
import PersonalInfo from '@/components/personalInfo/PersonalInfo';

export const metadata = {
  title: 'Books || LP Shahim',
  description:
    'My curated collection of favorite books and audiobooks that have shaped my thinking and growth',
};

import React from 'react';

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
              <Books />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
