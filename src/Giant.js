import React from 'react';
import PropTypes from 'prop-types';
import Die from './Die';

// Giant currently rolls one die, but is coded to be able
// to roll multiple if wanted.
export default function Giant(props) {
  return (
    <div>
      <div>Giant's Hoard: {props.hoard}</div>
      <DiceDiv>
        {this.props.dice.map((d, idx) =>
          <Die
            handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
          />
        )}
      </DiceDiv>
    </div>
  );
}

Giant.propTypes = {
  hoard: PropTypes.number,
  val: PropTypes.array,
  locked: PropTypes.bool,
  handleClick: PropTypes.func
}