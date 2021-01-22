import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from 'src/Pages/Landing';
import CarouselOriginal from 'src/Components/Carousel/CarouselOriginal';
import InputsTest from 'src/Components/Inputs/InputsTest';
import CarouselTest from 'src/Components/Carousel/CarouselTest';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/carousel" component={CarouselOriginal} />
      <Route path="/carousel2" component={CarouselTest} />
      <Route path="/inputs" component={InputsTest} />
    </Switch>
  </Router>
);

export default Routes;
