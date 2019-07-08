import React from 'react';
import PropTypes from 'prop-types';
import './Die.css';

export default Die = ({locked, handleClick, idx, val}) => (
  <button
    className={locked ? "Die Die-locked" : "Die"}
    onClick={() => handleClick(idx)}>
    { val }
  </button>
);

Die.propTypes = {
  locked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.number,
  val: PropTypes.number,
};
