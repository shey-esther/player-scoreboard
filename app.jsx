let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = (props) => {
  const puntosTotale = props.players.map((e) => e.score).reduce((a, b) => { return a + b });
  return (
    <div className="header">
      <div className="stats">
        <table>
          <tbody>
            <tr><td>PLAYERS:</td>{props.players.length}</tr>
            <tr><td>TOTAL:</td>{puntosTotale}</tr>
          </tbody>
        </table>
      </div>
      <div className="stopwatch">
        <h2>atopht</h2>
        <h1 className="stopwatch-time">0</h1>
        <button>B</button>
        <button>m</button>
      </div>
    </div>
  )
}

const PlayerList = (props) => {
  return (
    <div>{
      props.players.map((dato, index) => {
        return (
          <div className="player">
            <div className="player-name">{dato.name}</div>
            <div className="player-score counter">
            <button className="counter-action decrement btn">-</button>
            <p className="counter-score">{dato.score}</p>
            <button className="counter-action increment btn">+</button>          </div>
        </div>
        )
      })
    }
    </div>
  )
}

let PlayerForm = React.createClass({
  render: function () {
    return (
      
        <div className="add-player-form">
          <form>
          <input type="text"/>
          <input type="submit"/>
          </form>
        </div>
      
    )
  }
})

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={PLAYERS} />, document.getElementById('container'));
