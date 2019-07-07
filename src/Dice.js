import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return (
      <div className='Dice'>
        {this.props.dice.map((d, idx) =>
          <Die handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx} />
        )}
      </div>
    );
  }
}

Dice.propTypes={
  dice: PropTypes.array,
  locked: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
}

export default Dice;