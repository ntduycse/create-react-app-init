import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { verifyToken } from './actions/auth.action';
import Router from './router';

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.verifyToken();
  }

  render() {
    const { props } = this;
    return <Router isAuthenticated={props.isAuthenticated} />;
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  verifyToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  verifyToken: () => dispatch(verifyToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
