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
        <button>Basic</button><button>Basic</button>
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
            <div className="player-score">{dato.score}</div>
          </div>
        )
      })
    }
    </div>
  )
}

// let PlayerForm = React.createClass({
//   render: function () {
//     return (
//       <div className="counter-score">
//         <div className="add-player-form">
//           <input type="text"/>
//         </div>
//         <div className="add-player-form form">
//           <input type="submit"/>
//         </div>
//       </div>
//     )
//   }
// })

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      {/* <PlayerForm /> */}
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={PLAYERS} />, document.getElementById('container'));