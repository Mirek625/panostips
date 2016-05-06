import React from 'react';

import TrackingListItem from './TrackingListItem.jsx';

Tracked = new Mongo.Collection('tracked');

export default class TrackingListWrapper extends React.Component {
    componentWillUnmount() {
        return;
    }

    allPossibleCases(arr) {
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
    }

    render() {
        var testArr = [
            [
                '0:0',
                '1:0',
                '0:1',
                '1:1',
                '2:2'
            ],
            [
                '0:0',
                '1:0',
                '0:1',
                '1:1',
                '2:2'
            ],
            [
                '0:0',
                '1:0',
                '0:1',
                '1:1',
                '2:2'
            ]
        ];
        let cases = this.allPossibleCases(testArr);
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
