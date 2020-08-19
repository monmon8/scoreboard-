const players = [
  {
    name: "Guil",
    score: 50,
    id: 1,
  },
  {
    name: "Treasure",
    score: 85,
    id: 2,
  },
  {
    name: "Ashley",
    score: 95,
    id: 3,
  },
  {
    name: "James",
    score: 80,
    id: 4,
  },
];

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

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.intialPlayers.length} />
      {/*player list*/}
      {props.intialPlayers.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App intialPlayers={players} />,
  document.getElementById("root")
);
