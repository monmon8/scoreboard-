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
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  state = {
    score: 0,
  };

  incrementScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }
  render() {
    return (
      <div className="counter">
        <boutton className="counter-action decrement"> - </boutton>
        <span className="counter-score">{this.state.score}</span>
        <boutton
          className="counter-action increment"
          onClick={() => this.incrementScore()}
        >
          +
        </boutton>
      </div>
    );
  }
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.intialPlayers.length} />
      {/*player list*/}
      {props.intialPlayers.map((player) => (
        <Player name={player.name} key={player.id.toString()} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App intialPlayers={players} />,
  document.getElementById("root")
);
