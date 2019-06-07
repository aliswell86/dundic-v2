import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {
  MainPage, CardInfoPage, OutlinePage, LoadMapPage, TeraniumPage, ProfitCalcPage
} from 'pages';
import { Helmet } from "react-helmet";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-129699864-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;  
}

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>던파광부닷컴</title>
        </Helmet>
        <Route path="/" component={logPageView} />
        <Switch>
          <Route exact path="/outline" component={OutlinePage} />
          <Route exact path="/loadmap" component={LoadMapPage} />
          <Route exact path="/teranium" component={TeraniumPage} />
          <Route exact path="/calc" component={ProfitCalcPage} />
          <Route exact path="/1" component={MainPage} />
          <Route exact path="/2" component={CardInfoPage} />
          <Route component={MainPage}/>          
        </Switch>
      </div>
    );
  }
}

export default App;