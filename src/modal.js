import React from 'react';
import './Modal.css';

// FIXME Refactor into styled components.

const Modal = (props) => {
  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <div className="modal-header">
          <h3>Modal Header</h3>
          <span className="close-modal-button" onClick={props.close}>x</span>
        </div>
        <div className="modal-body">
          <div>
            {props.children}
          </div>
        </div>
        <div className="modal-footer">
          <button className="button-cancel" onClick={props.close}>CLOSE</button>
          <button className="btn-continue">CONTINUE</button>
        </div> 
      </div>
    </div>
  );
};

export default Modal;