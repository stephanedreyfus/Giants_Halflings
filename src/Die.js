import React from 'react';
import PropTypes from 'prop-types';
import './Die.css';

export default function Die(props) {
  return(
    <button
      className={props.locked ? "Die Die-locked" : "Die"}
      onClick={() => props.handleClick(props.idx)}>
      { props.val }
    </button>
  )
};

Die.propTypes = {
  locked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.number,
  val: PropTypes.number,
};
