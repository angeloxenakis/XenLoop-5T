import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import { XenLoop5T } from './components/xenLoop5T'
import { About } from './components/about'
import { Header } from './components/header'
import { Login } from './components/login'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Route exact path="/" component={XenLoop5T}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
