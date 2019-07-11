import React from 'react';
import PropTypes from 'prop-types';
import { DieBtn } from './styling/DiceStyle';

export default function Die(props) {
  return(
    <DieBtn
      onClick={() => props.handleClick(props.idx)}>
      { props.val }
    </DieBtn>
  )
};

Die.propTypes = {
  locked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.number,
  val: PropTypes.number,
};
