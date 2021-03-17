import React from 'react';
import { Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation, ApolloProvider } from '@apollo/client';
import logo from '../assets/testpage_logo.svg';

import './Header.css';

const PAGES = gql`
    query Query {
        pages{
            title,
            subPages
        }
    }
`;

const Header = () => {
  const { loading, data } = useQuery(PAGES);
  return (
    <header className="header">
      <nav className="top-container">
        <a href="/">
          <div className="top-logo">
            <img src={logo} alt="logo" />
          </div>
        </a>
          <ul className="items">
            {
              !loading && data.pages.map((page) => {
                return (
                  <li key={page.title}>
                    <a href="#" className="item-link">{page.title}</a>
                  </li>
                )
              })
            }
          </ul>
      </nav>
    </header>
  );
};

export default Header;