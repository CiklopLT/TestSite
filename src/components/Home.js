import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="content-container">
        <section className="content-selection">
          <h1 className="content-title">Lorem ipsum dolor sit met, consecte</h1>
          <p className="content-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
        </section>
        <aside className="submit-form-container">
          <h3 className="submit-title">Lorem ipsum dolor</h3>
          <hr />
          <p className="submit-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
          <div className="submit-form">
            <form>
              <div className="input-group">
                <label htmlFor="firstName" className="input-label">First name</label>
                <div className="">
                  <input type="text" readOnly="" className="submit-input" id="firstName" placeholder="Your first name here" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="lastName" className="input-label">Last name</label>
                <div className="">
                  <input type="text" readOnly="" className="submit-input" id="lastName" placeholder="Your last name here" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="messsage" className="input-label">Your message</label>
                <div className="">
                  <textarea rows={3} readOnly="" className="submit-input textarea-input" id="message" placeholder="Type your message here" />
                </div>
              </div>
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </aside>
      </div>
      <section className="bottom-container">
        <div className="bottom-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</div>
        <div className="bottom-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</div>
        <div className="bottom-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</div>
      </section>
    </Layout>
  );
};

export default Home;