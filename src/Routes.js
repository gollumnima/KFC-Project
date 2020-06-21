import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Carousel from 'src/Components/Carousel';
import Landing from 'src/Pages/Landing';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/carousel" component={Carousel} />
    </Switch>
  </Router>
);

export default Routes;
