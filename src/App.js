import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import NoMatch from "./components/NoMatch";


const App = () => (
  <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects}/>
        <Route component={NoMatch} />
      </Switch>
      <Footer />
  </Fragment>
);

export default App;
