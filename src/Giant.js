import React from 'react';
import PropTypes from 'prop-types';
import Dice from './Dice';

// Giant currently rolls one die, but is coded to be able
// to roll multiple if wanted.
export default function Giant(props) {
  return (
    <div>
      <div>Giant's Hoard: {props.hoard}</div>
      <Dice
        dice={props.dice}
        locked={props.locked}
        handleClick={props.handleClick}
      />
    </div>
  );
}

Giant.propTypes = {
  hoard: PropTypes.number,
  val: PropTypes.array,
  locked: PropTypes.array,
  handleClick: PropTypes.func
}