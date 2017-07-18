/* eslint-disable import/default */
import React from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

export default class Counter extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    counter: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <h4>Count</h4>
        {this.props.counter.count}
        <button onClick={this.props.actions.increment}>Up</button>
        <button onClick={this.props.actions.decrement}>Down</button>
        <button onClick={this.props.actions.doubleAsync}>Double</button>
      </div>
    );
  }
}
