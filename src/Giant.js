import React from 'react';
import PropTypes from 'prop-types';
import Dice from './Dice';
import { GiantWrap } from './styling/GiantStyle';

// Giant currently rolls one die, but is coded to be able
// to roll multiple if wanted.
export default function Giant(props) {
  return (
    <GiantWrap>
      <div>Giant's Hoard: {props.hoard}</div>
      <Dice
        dice={props.dice}
        locked={props.locked}
        handleClick={props.handleClick}
      />
    </GiantWrap>
  );
}

Giant.propTypes = {
  hoard: PropTypes.number,
  val: PropTypes.array,
  locked: PropTypes.array,
  handleClick: PropTypes.func
}