import React from 'react';
import PropTypes from 'prop-types';

export default function Giant(props) {
  return (
    <div>
      <div>Giant's Hoard: {props.hoard}</div>
      <Die
        val={props.val}
        locked={props.locked}
        handleClick={props.handleClick}
        idx={0}
      />
    </div>
  );
}

Giant.propTypes = {
  hoard: PropTypes.number,
  val: PropTypes.number,
  locked: PropTypes.bool,
  handleClick: PropTypes.func
}