import React, { ReactElement } from 'react';

interface IBackdropProps {
    onClick: () => void;
}

const Backdrop: React.FC<IBackdropProps> = ({ onClick }) => {
 
    return (
        <div className="modal-backdrop" onClick={onClick} />
    )
};

export default Backdrop;