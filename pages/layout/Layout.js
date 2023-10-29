import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import Carousel from '../components/Home/Carousel';
import Features from '../components/Home/Features';

export default function Layout({children}) {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
      <ScrollTop/>
    </>
  );
}
