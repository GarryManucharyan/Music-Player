import React from 'react';
import Backdrop from './backdrop';

import "./Modal.css"

interface ModalProps {
    isOpen: boolean;
    onClose: (isOpened: boolean) => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const handleCloseModal = () => {
        onClose(false);
    };

    return (
        <>
            {isOpen && (
                <>
                    <Backdrop onClick={handleCloseModal} />
                    <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
                        <div className="modal-content">
                            <button className="close-button" onClick={handleCloseModal}>
                                x
                            </button>
                            {children}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;