import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Dislplays current wager */
// FIXME change to stateless functional component
class Pot extends Component {

  render() {
    const { gold, handleSubmit } = this.props;
    
    return(
      <section className='pot'>
        <div>Current pot holds {gold} coins.</div>
      </section>
    );
  }
}

Pot.propTypes = {
  gold: PropTypes.number
}

export default Pot;