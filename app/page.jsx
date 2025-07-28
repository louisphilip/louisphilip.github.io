import About from '@/components/about/About';
import HeaderBg from '@/components/headers/HeaderBg';
import Header from '@/components/headers/Header';
import PersonalInfo from '@/components/personalInfo/PersonalInfo';
import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'LP Shahim',
  description: 'Discover more about me...',
};

export default function Home() {
  return (
    <>
      <Script
        id='next'
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script id='next'>
        {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
      </Script>
      <div className='page-wrapper home-3'>
        <HeaderBg />
        <div className='container z-index-3'>
          <div className='row'>
            <PersonalInfo />
            <div className='col-xxl-8 col-xl-8 col-lg-8'>
              <Header />
              <About />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
