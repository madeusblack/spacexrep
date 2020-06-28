import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Browse from '../containers/Browse';
import About from '../containers/About';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/browse' exact component={Browse} />
        <Route path='/about' exact component={About} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
