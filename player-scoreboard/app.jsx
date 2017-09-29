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

let Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <div className="stats">
          <tr><td>PLAYERS:3</td></tr>
          <tr><td>TOTAL:180</td></tr>
        </div>
        <div className="stopwatch">
          <h2>atopht</h2>
          <h1 className="stopwatch-time">0</h1>
          <button>Basic</button><button>Basic</button>
        </div>
      </div>
    )
  }
})

let PlayerList = React.createClass({
  render: function () {
    return (
      <div className="player">

        <div className="counter-score ">
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="player-score">
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            <span className="input-group-addon">$</span>
          </div>
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            <span className="input-group-addon">$</span>
          </div>
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            <span className="input-group-addon">$</span>
          </div>
        </div>

      </div>
    )
  }
})

let PlayerForm = React.createClass({
  render: function () {
    return (
      <div className="counter-score">

        <div className="add-player-form">
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="add-player-form form">
          <button type="button" className="btn">Basic</button>
        </div>

      </div>
    )
  }
})

const Application = ({ title, players }) => {
  return (
    <div>
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={PLAYERS} />, document.getElementById('container'));