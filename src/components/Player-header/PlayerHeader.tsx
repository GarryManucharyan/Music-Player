import React, { useState } from "react";
import "./PlayerHeader.css";
import { HeaderButton } from "../Header-button/HeaderButton";
import { useAppSelector } from "../../hooks";
import { UploadForm } from "../Upload-form/UploadForm";
import Modal from "../Modal";

export const PlayerHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const songsList = useAppSelector(state => state.player);


    const playAll = () => {
        for (let i = 0; i < songsList.length; i++) {
            console.log(songsList[i]);
        }
    }


    return (
        <div className="player-header">
            <div className="buttons-row">
                <HeaderButton buttonName="Play All" onClick={playAll} iconPath="play.svg" />
                <HeaderButton buttonName="Add" onClick={handleOpenModal} iconPath="plus.svg" />
            </div>
            <div className="search-row">
                <HeaderButton onClick={() => {}} buttonName="Track Number" iconPath="sort.svg" />
                <input type="text" className="search-input" placeholder="Filter"></input>
            </div>

            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <UploadForm />
            </Modal>
        </div>
    )
}