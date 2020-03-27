import React from 'react';
import Layout from '../layout/Layout';
import Header from '../containers/Header/Header'
import AboutMe from '../containers/AboutMe/AboutMe'
import Certifications from '../containers/Certifications/Certifications'
import Contact from '../containers/Contact/Contact'
import Portfolio from '../containers/Portfolio/Portfolio'
import BackTop from './BackTop/BackTop'

function App() {
  return (
    <Layout>
      <BackTop/>
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Certifications/>
      <Contact/>
    </Layout>
  );
}

export default App;
