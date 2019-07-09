import React from 'react';
import PropTypes from 'prop-types';
import Die from './Die';

// FIXME: since we are passed an array, even though it is only one number,
// we should refactor so that somehow we could map to multiple dice.
// Perhaps change to Dice element and map even though it's just one.
export default function Giant(props) {
  return (
    <div>
      <div>Giant's Hoard: {props.hoard}</div>
      <Die
        val={props.val[0]}
        locked={props.locked}
        handleClick={props.handleClick}
        idx={0}
      />
    </div>
  );
}

Giant.propTypes = {
  hoard: PropTypes.number,
  val: PropTypes.array,
  locked: PropTypes.bool,
  handleClick: PropTypes.func
}