import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import updateFrozen from '../../actions/frozenAction';
import clearInventory from '../../actions/clearAction';

class FrozenDept extends Component {

  increment = (operation, index) => {
    this.props.updateFrozen(operation, index)
  }

  render() {
    // console.log(this.props.frozenData);
    const frozenInventory = this.props.frozenData.map((item, i) => (
      <div key={i}>
        <li>{item.food}: {item.quantity}</li>
        <input type="button" onClick={() => this.increment('+', i)} value="+" />
        <input type="button" onClick={() => this.increment('-', i)} value="-" />
      </div>
    ))

    return (
      <div>
        <h1>Frozen Department using Redux state and store ...</h1>
        <ul>
          {frozenInventory}
        </ul>
        <button onClick={this.props.clearAllTheInventory}>Clear Inventory</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateFrozen: updateFrozen,
    clearAllTheInventory: clearInventory
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);