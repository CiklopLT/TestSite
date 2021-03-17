import React from 'react';
import { gql, useQuery } from "@apollo/client";

import Layout from './Layout';
import SubmitForm from './SubmitForm';
import '../styles/Home.css';

const CONTENT = gql`
    query Query($title: String!) {
        singlePage(title: $title){
            content{
                title,
                body,
                footer
            }
        }
    }
`;

const Home = () => {
  const { loading, data } = useQuery(CONTENT, { variables: { title: 'Projects' }});
  return (
    <Layout>
      <div className="content-container">
        <section className="content-selection">
          {
            !loading &&
            [
              <h1 key="h1" className="content-title">{data.singlePage.content.title}</h1>,
              data.singlePage.content.body.split('|||').map((body, i) => <p key={i} className="content-body">{body}</p>)
            ]
          }
        </section>
        <aside className="submit-form-container">
          <h3 className="submit-title">Lorem ipsum dolor</h3>
          <hr />
          <p className="submit-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
          <div className="submit-form">
            <SubmitForm />
          </div>
        </aside>
      </div>
      <section className="bottom-container">
        {!loading && data.singlePage.content.footer.split('|||').map((footer, i) => <div key={i} className="bottom-content">{footer}</div>)}
      </section>
    </Layout>
  );
};

export default Home;