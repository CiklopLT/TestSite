import React from 'react';
import Header from './Header'
import Footer from './Footer'

import '../styles/Layout.css';
import { gql, useQuery } from "@apollo/client";

const PAGES = gql`
    query Query {
        pages{
            title,
            subPages
        }
    }
`;

const Layout = ({ children }) => {
  const { loading, data } = useQuery(PAGES);
  return (
    <div className="layout">
      <Header menuLoading={loading} menuData={data} />
      <main className="main">
        {children}
      </main>
      <Footer menuLoading={loading} menuData={data} />
    </div>
  );
};

export default Layout;