import React from 'react';
import PropTypes from 'prop-types';
import Dice from './Dice';
import { HalflingWrap } from './styling/HalflingStyle';

export default function Halflings(props) {
  return (
    <HalflingWrap>
      <div>Loot Thus Far: {props.loot}</div>
      <Dice
        dice={props.dice}
        locked={props.locked}
        handleClick={props.handleClick}
      />
    </HalflingWrap>
  );
}

Halflings.propTypes = {
  dice: PropTypes.array,
  locked: PropTypes.array,
  handleClick: PropTypes.func,
  loot: PropTypes.number
}