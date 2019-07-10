import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import { Dice } from './styling/DiceStyle';

class Dice extends Component {
  render() {
    return (
      <Dice>
        {this.props.dice.map((d, idx) =>
          <Die
            handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
          />
        )}
      </Dice>
    );
  }
}

Dice.propTypes={
  dice: PropTypes.array,
  locked: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
}

export default Dice;