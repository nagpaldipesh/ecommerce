import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from '../components/ScrollTop';
import Carousel from '../components/Home/Carousel';
import Features from '../components/Home/Features';

export default function Layout({children}) {
  return (
    <>
      <Header/>
      <Carousel/>
      {/* <Features/> */}
        {children}
      <Footer/>
      <ScrollTop/>
    </>
  );
}
