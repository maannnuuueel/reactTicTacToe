import React from 'react';
import './game.css';

class Game extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      game: [0,0,0,0,0,0,0,0,0],
      szug: 1,
    }

    this.Feld = this.Feld.bind(this);


  }

  check () {
    //check if game has ended
    let g = this.state.game;

    //X wins
    if (g[0]+g[1]+g[2] === 3 || g[6]+g[7]+g[8] === 3 || g[3]+g[4]+g[5] === 3 || 
        g[0]+g[3]+g[6] === 3 || g[1]+g[4]+g[7] === 3 || g[2]+g[5]+g[8] === 3 ||
        g[0]+g[4]+g[8] === 3 || g[2]+g[4]+g[6] === 3) {
      this.setState({game: [1,1,1,1,1,1,1,1,1]});
      setTimeout(this.startnewgame,1000);
    }

    //O wins
    if (g[0]+g[1]+g[2] === -3 || g[6]+g[7]+g[8] === -3 || g[3]+g[4]+g[5] === -3 || 
        g[0]+g[3]+g[6] === -3 || g[1]+g[4]+g[7] === -3 || g[2]+g[5]+g[8] === -3 ||
        g[0]+g[4]+g[8] === -3 || g[2]+g[4]+g[6] === -3) {
      this.setState({game: [-1,-1,-1,-1,-1,-1,-1,-1,-1]});
      setTimeout(this.startnewgame,1000);
    }

    //draw
    if (g[0]*g[1]*g[2]*g[3]*g[4]*g[5]*g[6]*g[7]*g[8] !== 0) {
      setTimeout(this.startnewgame,1000);
    }
  }

  startnewgame = () => {
    this.setState({game: [0,0,0,0,0,0,0,0,0], szug: 1});
  }

  proceedGame = (id) => {
    let g = this.state.game;
    if (g[id] === 0) {
      g[id] = this.state.szug
      this.setState({game: g, szug: -this.state.szug});
      this.check();
    }
  }

  Feld (args) {
    return(
      <div className="feld" onClick={this.proceedGame.bind(this,args.id)} >
      {this.state.game[args.id] === 0 ? "" :
       this.state.game[args.id] === 1 ? "X" :
       "O" }
    </div>
    );
  }


  render() {

    return (
      <div className="Game noselect" style={{width: "min(100vh,100vw)",height: "min(100vh,100vw)", display: "flex", justifyContent: "center", alignItems: "center"}} >
        <div style={{width: "80%", height: "80%", overFlow: "hidden", display: "flex", flexDirection: "row"}} >
          
          <div style={{display: "flex", flexDirection: "column", width: "30%", height: "100%"}}>
            <this.Feld id={0} />
            <div className="border vert" />
            <this.Feld id={1} />
            <div className="border vert" />
            <this.Feld id={2} />
          </div>

          <div className="border hori" />

          <div style={{display: "flex", flexDirection: "column", width: "30%", height: "100%"}}>
            <this.Feld id={3}  />
            <div className="border vert" />
            <this.Feld id={4} />
            <div className="border vert" />
            <this.Feld id={5} />
          </div>

          <div className="border hori" />

          <div style={{display: "flex", flexDirection: "column", width: "30%", height: "100%"}}>
            <this.Feld id={6} />
            <div className="border vert" />
            <this.Feld id={7}/>
            <div className="border vert" />
            <this.Feld id={8} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
