import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Joke from './components/Joke'
import About from './components/Pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container mx-auto">
        <Route path="/about" component={About} />
        <Route path="/" exact component={Joke} />
      </div>
    </div>
    </Router>
  );
}

export default App;
