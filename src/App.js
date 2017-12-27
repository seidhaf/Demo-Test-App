import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './pages/Content.jsx';
import Upload from './pages/Upload.jsx';
import Link from './pages/Link.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Content}/>
          <Route path="/link" component={Link}/>
          <Route path="/upload" component={Upload}/>
        </div>
      </Router>
    );
  }
}

export default App;
