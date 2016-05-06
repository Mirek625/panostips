import React from 'react';
import TrackingListItem from '../trackinglist/TrackingListItem.jsx';

var ArrayForm = React.createClass({
    getInitialState: function() {
      return {
        combos: [],
        inputs: 3,
        games: 3
      }
    },

    addGame: function() {
      var newGamesCount = this.state.games += 1;
      this.setState({games: newGamesCount});
    },

    addInputRow: function() {
      var newInputsCount = this.state.inputs += 1;
      this.setState({inputs: newInputsCount});
    },

    passInput: function() {
      var tips = document.getElementsByClassName('tip');
      var tmpArr = [];
      var ret = [];
      for(let i = 0; i < tips.length; i++) {
        tmpArr.push(tips[i].value);
      }
      for(let i = 0; i < tmpArr.length; i += 3) {
        ret.push(tmpArr.slice(i, i + 3));
      }
      this.setState({combos: ret});
    },

    allPossibleCases: function(arr) {
        if (arr.length === 0) {
            return [];
        } else if (arr.length === 1) {
            return arr[0];
        } else {
            var result = [];
            var allCasesOfRest = this.allPossibleCases(arr.slice(1)); // recur with the rest of array
            for (var c in allCasesOfRest) {
                for (var i = 0; i < arr[0].length; i++) {
                    result.push(arr[0][i] + " - " + allCasesOfRest[c]);
                }
            }
            return result;
        }
    },

    render: function() {
      if(this.state.combos.length === 0) {
        let game = [];
        let list = [];
        for (let i = 0; i < this.state.inputs; i++) {
            game.push(
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" placeholder="0:0" className="tip"/>
                    </div>
                </div>
            );
        }
        for (let i = 0; i < this.state.games; i++) {
            list.push(
                <div className="form-wrapper col s2 gray-border">
                    <h4 className="center">Spiel {this.state.num}</h4>
                    {game}
                </div>
            );
        }
        return (
            <div className="container">
                <div className="card-panel">
                    <div className="row">
                        {list}
                        <a href="/" className="btn btn-lg" onClick={() => {this.addGame()}}>+</a>
                    </div>
                    <div className="row">
                        <a href="/" className="btn btn-lg" onClick={() => {this.addInputRow()}}>+</a>
                    </div>
                </div>
                <a className="btn btn-lg center" href="/" onClick={() => {this.passInput()}}>Abschicken</a>
            </div>
        );
    } else {
      let cases = this.allPossibleCases(this.state.combos);
      let list = [];
      for (var i = 0; i < cases.length; i++) {
          list.push(<TrackingListItem content={cases[i]} key={i}/>);
      }
      if (list.length < 1) {
        return (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        );
      }
      return (
          <div className="container">
              <div className="card-panel">
                  <h4 className="center">Kombinationen</h4>
                    <ul>
                        {list}
                    </ul>
              </div>
          </div>
      );
    }
  }
});

export default ArrayForm
