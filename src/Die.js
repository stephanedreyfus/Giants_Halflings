import React from 'react';
import PropTypes from 'prop-types';
import { Die } from './styling/DiceStyle';

export default function Die(props) {
  return(
    <Die
      onClick={() => props.handleClick(props.idx)}>
      { props.val }
    </Die>
  )
};

Die.propTypes = {
  locked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.number,
  val: PropTypes.number,
};
