import { useState } from 'react';
import './game.css';

function Game () {   
  const [game, setGame] = useState([0,0,0,0,0,0,0,0,0]);
  const [szug, setSzug] = useState(1);

  const check = () => {
    //check if game has ended
    let g = game;

    //X wins 
    if (g[0]+g[1]+g[2] === 3 || g[6]+g[7]+g[8] === 3 || g[3]+g[4]+g[5] === 3 || 
        g[0]+g[3]+g[6] === 3 || g[1]+g[4]+g[7] === 3 || g[2]+g[5]+g[8] === 3 ||
        g[0]+g[4]+g[8] === 3 || g[2]+g[4]+g[6] === 3) {
      console.log('X wins');
      setGame([1,1,1,1,1,1,1,1,1]);
      setTimeout(startnewgame,1000);
    }

    //O wins
    if (g[0]+g[1]+g[2] === -3 || g[6]+g[7]+g[8] === -3 || g[3]+g[4]+g[5] === -3 || 
        g[0]+g[3]+g[6] === -3 || g[1]+g[4]+g[7] === -3 || g[2]+g[5]+g[8] === -3 ||
        g[0]+g[4]+g[8] === -3 || g[2]+g[4]+g[6] === -3) {
      console.log('O wins');
      setGame([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
      setTimeout(startnewgame,1000);
    }

    //draw
    if (g[0]*g[1]*g[2]*g[3]*g[4]*g[5]*g[6]*g[7]*g[8] !== 0) {
      console.log('draw');
      setTimeout(startnewgame,1000);
    }
  }

  const startnewgame = () => {
    console.log('new game');
    setGame([0,0,0,0,0,0,0,0,0]);
    setSzug(Math.floor(2*Math.random()));
  }

  const proceedGame = (id) => {
    if (game[id] === 0) {
      const next = game.map((c,i) => {return (i !== id) ? c : szug});
      setGame(next);
      setSzug(-szug);
      check();
    }
  }

  const Feld = (args) => {
    return <div className="feld" onClick={() => proceedGame(args.id)} >
      {game[args.id] === 0 ? "" :
       game[args.id] === 1 ? "X" :
       "O"}
    </div>;
  }

  return <div className="Game noselect" style={{width: "min(100vh,100vw)",height: "min(100vh,100vw)", display: "flex", justifyContent: "center", alignItems: "center"}} >
        <div style={{width: "80%", height: "80%", overFlow: "hidden", display: "flex", flexDirection: "row"}} >
          
          <div style={{display: "flex", flexDirection: "column", width: "30%", height: "100%"}}>
            <Feld id={0} />
            <div className="border vert" />
            <Feld id={1} />
            <div className="border vert" />
            <Feld id={2} />
          </div>

          <div className="border hori" />

          <div style={{display: "flex", flexDirection: "column", width: "30%", height: "100%"}}>
            <Feld id={3}  />
            <div className="border vert" />
            <Feld id={4} />
            <div className="border vert" />
            <Feld id={5} />
          </div>

          <div className="border hori" />

          <div style={{display: "flex", flexDirection: "column", width: "30%", height: "100%"}}>
            <Feld id={6} />
            <div className="border vert" />
            <Feld id={7}/>
            <div className="border vert" />
            <Feld id={8} />
          </div>
        </div>
      </div>;
}

export default Game;