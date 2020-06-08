import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import { MainPanel } from './components/mainPanel'
import { About } from './components/about'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MainPanel}/>
        <Route path="/about" component={About}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
