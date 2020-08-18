const Header = (props) => {
  return (
    <header>
      <h1> {props.title} </h1>
      <span className="stats"> {props.totalPlayers} </span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <boutton className="counter-action decrement"> - </boutton>
      <span className="counter-score">{props.score}</span>
      <boutton className="counter-action increment"> + </boutton>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />
      {/*player list*/}
      <Player name="Guil" score={50} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
