import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import { MainPanel } from './components/mainPanel'
import { About } from './components/about'
import Metronome from './components/Metronome'
import { Header } from './components/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Route exact path="/" component={MainPanel}/>
        <Route path="/about" component={About}/>
        <Route path="/metronome" component={Metronome}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
