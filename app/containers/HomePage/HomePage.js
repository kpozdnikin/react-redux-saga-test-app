/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import FlightsList from '../../components/FlightsList';
import './style.scss';

const HomePage = () => (
  <article>
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="A React.js test application homepage"
      />
    </Helmet>
    <div className="home-page">
      <section className="centered">
        <h2>Let`s fly together</h2>
        <p>Frontend Technical Challenge Project</p>
      </section>
      <section>
        <FlightsList />
      </section>
    </div>
  </article>
);

export default HomePage;
