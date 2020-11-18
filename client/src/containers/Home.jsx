import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Overview from '../components/Overview';

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Jumbotron />
        <Overview type={this.props.match.params.type} />
      </>
    );
  }
}

export default Home;
