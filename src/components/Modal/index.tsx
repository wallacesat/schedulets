import React from 'react';

import './styles.scss';

const Modal = ({ children, isOpen = false }:
  {children: React.ReactElement, isOpen: boolean}) => (
    <div
      className="modal-container"
      style={{ display: `${isOpen ? 'flex' : 'none'}` }}
    >
      <div className="modal-page">{children}</div>
    </div>
);

export default Modal;
