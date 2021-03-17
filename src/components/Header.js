import React from 'react';
import { useState } from "react";
import { gql, useQuery } from '@apollo/client';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/testpage_logo.svg';

import './Header.css';

const Header = ({ menuLoading, menuData }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="top-container">
          <a href="/">
            <div className="top-logo">
              <img src={logo} alt="logo" />
            </div>
          </a>
          <ul className="items">
            {
              !menuLoading && menuData.pages.map((page) => {
                console.log(page);
                return (
                  <>
                    <li key={page.title}>
                      <a href="#" className="item-link">{page.title}</a>
                    </li>
                    {
                      !!page.subPages.length &&
                      <div className="drop">
                        {
                          page.subPages.map((subPage) => {
                            return (<div><a href="#" key={subPage}>{subPage}</a></div>)
                          })
                        }
                      </div>
                    }
                  </>
                )
              })
            }
          </ul>
          <FaBars
            className="drawer-icon"
            size="2em"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </nav>
      </header>
      {
        showMobileMenu &&
        <div className="mobile-nav-container">
          {
            !menuLoading && menuData.pages.map((page) => {
              return (
                <div className="mobile-nav-item" key={page.title}>
                  <a href="#">{page.title}</a>
                </div>
              )
            })
          }
        </div>
      }
    </>
  );
};

export default Header;