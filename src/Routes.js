import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from 'src/Pages/Landing';
import Carousel from 'src/Components/Carousel';
import InputsTest from 'src/Components/Inputs/InputsTest';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/inputs" component={InputsTest} />
    </Switch>
  </Router>
);

export default Routes;
