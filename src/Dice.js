import React from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import { DiceDiv } from './styling/DiceStyle';

const Dice = (props) => {
  return (
    <DiceDiv>
      {props.dice.map((d, idx) =>
        <Die
          handleClick={props.handleClick}
          val={d}
          locked={props.locked[idx]}
          idx={idx}
          key={idx}
        />
      )}
    </DiceDiv>
  );
};

Dice.propTypes={
  dice: PropTypes.array,
  locked: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
};

export default Dice;