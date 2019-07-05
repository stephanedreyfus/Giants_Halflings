import React, { Component } from 'react';



class Pot extends Component {
  render() {
    return(
      <section className='pot'>
        <div>Current pot holds {this.props.gold} coins.</div>
      </section>
    );
  }
}

export default Pot;