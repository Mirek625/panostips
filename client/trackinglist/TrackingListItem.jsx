import React from 'react';

export default class TrackingListItem extends React.Component {
  render() {
    return (
      <li className="combo">{this.props.content}</li>
    );
  }
}
