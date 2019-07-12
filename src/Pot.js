import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Takes in gold wagered and submits values to
 * Rules for calculation of results. */
class Pot extends Component {

  render() {
    const { gold, handleSubmit } = this.props;
    
    return(
      <section className='pot'>
        <div>Current pot holds {gold} coins.</div>
        <form action="submit">
          <label htmlFor="wager">What's your wager?</label>
          <input type="int-field" />
          <button onSubmit={handleSubmit}>Place Wager</button>
        </form>
      </section>
    );
  }
}

Pot.propTypes = {
  gold: PropTypes.number,
  handleSubmit: PropTypes.func
}

export default Pot;