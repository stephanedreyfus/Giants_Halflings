import React, { Component } from 'react';

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

export default Pot;