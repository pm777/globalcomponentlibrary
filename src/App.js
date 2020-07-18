import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navigation from './pages/Navigation';

import HorizontalSeparator from './components/HorizontalSeparator';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSliderCarousels from './components/ImageSliderCarousels';
function App() {
  return (
    <div className="App">
            
        <Header Title="true"></Header>
        <br></br><br></br><br></br>
        <h1>Heree....</h1>
        <HorizontalSeparator></HorizontalSeparator>
        <br></br><br></br><br></br><br></br>
        <ImageSliderCarousels></ImageSliderCarousels>
        <br></br><br></br><br></br><br></br>
        <br>
        </br>
        <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hii</h1>
        <br></br>
        <br></br>
        <br></br>
        <h1>ok</h1>      
      <Footer></Footer>      
    </div>
  );
}

export default App;
