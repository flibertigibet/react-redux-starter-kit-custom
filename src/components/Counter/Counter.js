/* eslint-disable import/default */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
  actions: PropTypes.object.isRequired,
  counter: PropTypes.object.isRequired
};

export default class Counter extends Component {
  console.log('props', this.props);
  render() {
    return (<div>{this.props.counter.count}</div>);
  }
}
