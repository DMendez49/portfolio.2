import { BrowserRouter as Router } from 'react-router-dom';
// export {default as RailsView} from "./components/RailsView";
// export {default as ReactView} from "./components/ReactView";
// import RailsView from './RailsView';
// import ReactView from './ReactView';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
);

