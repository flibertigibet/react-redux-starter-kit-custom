import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/counterActions';
import Counter from '../components/Counter';

export const CounterContainer = (props) => {
  return (
    <Counter actions={props.actions} counter={props.counter} />
  );
};

CounterContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  counter: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
