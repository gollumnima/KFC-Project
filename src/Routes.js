import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from 'src/Pages/Landing';
import Carousel from 'src/Components/Carousel';
import CheckboxTest from 'src/Components/CheckboxGroup/CheckboxTest';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/checkbox" component={CheckboxTest} />
    </Switch>
  </Router>
);

export default Routes;
