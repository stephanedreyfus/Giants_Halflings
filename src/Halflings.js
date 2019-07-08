import React from 'react';
import PropTypes from 'prop-types';
import Dice from './Dice';
export default function Halflings(props) {
  <div>
    <div>Loot Collected: {props.loot}</div>
    <Dice
      dice={props.dice}
      locked={props.locked}
      handleClick={props.handleClick}
    />
  </div>
}

Halflings.propTypes = {
  dice: PropTypes.array,
  locked: PropTypes.array,
  handleClick: PropTypes.func,
  loot: PropTypes.number
}