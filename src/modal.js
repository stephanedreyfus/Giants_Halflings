import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

// FIXME Refactor into styled components.

const Modal = (props) => {
  const {
    btnText = 'CONTINUE',
    header = 'Welcome to Giants and Halflings!',
    children = `You start with ${baseGold}`,
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
          <h3>{header}r</h3>
          <span className="close-modal-button" onClick={close}>x</span>
        </div>
        <div className="modal-body">
          <div>
            {children}
          </div>
        </div>
        <div className="modal-footer">
          <button className="button-cancel" onClick={close}>CLOSE</button>
          <button className="btn-continue">{btnText}</button>
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
  children: PropTypes.node.isRequired,
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