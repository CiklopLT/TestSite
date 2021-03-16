import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;