import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PotWrap } from './styling/PotStyle';

/** Dislplays current wager */
// FIXME change to stateless functional component
class Pot extends Component {

  render() {
    
    return(
      <PotWrap className='pot'>
        <div>Current pot holds {this.props.gold} coins.</div>
      </PotWrap>
    );
  }
}

Pot.propTypes = {
  gold: PropTypes.number
}

export default Pot;