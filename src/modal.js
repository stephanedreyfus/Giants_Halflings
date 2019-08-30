import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { CloseX, HeadText, ModWrapper } from './styling/ModalStyle';

// FIXME Refactor into styled components.

const Modal = (props) => {
  const {
    btnText = 'CONTINUE',
    header = 'Welcome to Giants and Halflings!',
    gold = 0,
    message = `You start with ${gold} gold pieces.`,
    show,
    close,
  } = props;

  return (
    <div>
      <ModWrapper
        style={{
          transform: show ? 'translateY(-20vh)' : 'translateY(-120vh)',
          opacity: show ? '1' : '0'
        }}>
        <div className="modal-header">
          <HeadText>{header}</HeadText>
          <CloseX onClick={close}>&times;</CloseX>
        </div>
        <div className="modal-body">
          <div>
            {props.children || message}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-continue" onClick={close}>{btnText}</button>
        </div> 
      </ModWrapper>
    </div>
  );
};

Modal.propTypes = {
  btnText: PropTypes.string,
  header: PropTypes.string,
  gold: PropTypes.number,
  show: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.node,
  baseGold: PropTypes.number,
}

export default Modal;

// EVENTUALLY Use when you are clear on what modal will be displaying.
// An object that could be one of many types
// optionalProp: PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.number,
//   PropTypes.instanceOf(Message)
// ]),