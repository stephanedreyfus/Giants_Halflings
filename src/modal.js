import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

// FIXME Refactor into styled components.

const Modal = (props) => {
  const {
    btnText = 'CONTINUE',
    header = 'Welcome to Giants and Halflings!',
    baseGold,
    message = `You start with ${baseGold} gold pieces.`,
    show,
    close,
  } = props;

  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}>
        <div className="modal-header">
          <h3>{header}</h3>
        </div>
        <div className="modal-body">
          <div>
            {props.children || message}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-continue" onClick={close}>{btnText}</button>
        </div> 
      </div>
    </div>
  );
};

Modal.propTypes = {
  btnText: PropTypes.string,
  header: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.node,
  baseGold: PropTypes.number,
}

export default Modal;

// FIXME Use when you are clear on what modal will be displaying.
// An object that could be one of many types
// optionalProp: PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.number,
//   PropTypes.instanceOf(Message)
// ]),