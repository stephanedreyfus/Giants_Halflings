import React from 'react';
import PropTypes from 'prop-types';
import { DieBtn } from './styling/DiceStyle';

const Die = (props) => {
  return(
    <DieBtn
      onClick={() => props.handleClick(props.idx)}
      locked={ props.locked }>
      { props.val }
    </DieBtn>
  );
};

Die.propTypes = {
  locked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.number,
  val: PropTypes.number,
};

export default Die;