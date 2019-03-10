import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="ui internally celled grid">
        <div className="row">
          <div className="three wide column" />
          <div className="ten wide column">
            <p />
          </div>
          <div className="three wide column" />
        </div>
        <div className="row">
          <div className="three wide column" />
          <div className="ten wide column">
            <p />
          </div>
          <div className="three wide column" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
