import React from 'react';

import ArrayForm from './ArrayForm.jsx';

export default class InputForm extends React.Component {
  render() {
    var arrCount = 3;
    var inputCount = 3;

    return (
      <ArrayForm games={arrCount} inputs={inputCount} />
    );
  }
}
