import React from 'react'
import './style.css'




const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
        return (
        <div className={showHideClassName}>
            <section className="modal-main">
            {children} hi
            <button onClick={handleClose}>close</button>
            </section>
        </div>
        );
    };

export default Modal 