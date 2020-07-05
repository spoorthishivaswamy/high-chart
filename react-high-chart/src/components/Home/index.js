import React, { Fragment, Component } from 'react';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization } from '../Session';
import Charts from "../Chart"

class Home extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    selectedCardType: ''
  };
}


  render(){
    return (
      <Fragment>
        <div className="app-bar">
          <h1 className="app-bar-title">Graph Views!</h1>
        </div>
        <section className="app-section container">
          {this.renderCardSelector()}

          <div className="top-margin-small">
            {this.renderSelectedCard(this.state.selectedCardType)}
          </div>
        </section>
      </Fragment>
    );
  }


  renderCardSelector() {
    return (
      <div className="form-group top-margin-small">
        <label className="card-selector-label"> Select Type Of Graph </label>
        <select className="card-selector form-control"
          onChange={(e) => this.setState({ selectedCardType: e.target.value })}>
          <option></option>
          <option>bar</option>
          <option>line</option>
          <option>pie</option>
          <option>area</option>
        </select>
      </div>
    );
  }


  renderSelectedCard(selectedCardType) {
    if (selectedCardType){
      return <Charts type={this.state.selectedCardType}/>;
    }
  }

  }

const condition = authUser => !!authUser;
export default compose(
  withAuthorization(condition),
)(Home);