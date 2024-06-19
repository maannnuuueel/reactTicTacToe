import React from 'react';
import './App.css';
import Game from './components/game.js';




class App extends React.Component {
  
  constructor(props) {
  	super(props);
  }

  render () {

	  return (
	    <div className="App">
	      <Game/>
	    </div> 
	  );
  }
}  

export default App;
