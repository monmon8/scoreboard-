const Header = (props) => {
  return (
    <header>
      <h1> {props.title} </h1>
      <span className="stats"> {props.totalPlayers} </span>
    </header>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Guill</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <boutton className="counter-action decrement"> - </boutton>
      <span className="counter-score">35</span>
      <boutton className="counter-action increment"> + </boutton>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />
      {/*player list*/}
      <Player />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
