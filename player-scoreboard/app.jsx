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
        <div className="row">
          <div className="col-md-8">
            <p>PLAYERS:3</p>
            <p>TOTAL:180</p>
          </div>
          <div className="col-md-4">
            <p>atopht</p>
            <p>0</p>
            <div className="col-md-6">
              <button type="button" className="btn">Basic</button>
              <button type="button" className="btn">Basic</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

let PlayerList = React.createClass({
  render: function () {
    return (
      <div className="player">
        <div className="row">
          <div className="col-md-8">
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="col-md-4">
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
      </div>
    )
  }
})

let PlayerForm = React.createClass({
  render: function () {
    return (
      <div id="container">
      <di class="row">
        <div class="col-md-10">
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />            
        </div>
        <div class="col-md-2">
            <button type="button" className="btn">Basic</button>            
        </div>
      </di>
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