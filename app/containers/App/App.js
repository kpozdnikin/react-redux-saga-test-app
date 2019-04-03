/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

//import HomePage from '../HomePage/Loadable';
import HomePage from '../HomePage';
// import FormCreatePage from '../FormCreatePage/Loadable';
import FormCreatePage from '../FormCreatePage';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js test application"
      defaultTitle="React.js test application"
    >
      <meta name="description" content="A React.js test application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/features" component={FormCreatePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
