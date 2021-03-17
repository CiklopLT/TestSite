import React from 'react';

import './Footer.css';

const Footer = ({ menuLoading, menuData }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <ul>
            {
              !menuLoading && menuData.pages.map((page) => {
                return (
                  <li key={page.title}>
                    <a href="#">{page.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <p className="bottom-line">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
      </div>
    </footer>
  )
}

export default Footer;