import { HeaderButton } from "../Header-button/HeaderButton";
import { UploadForm } from "../Upload-form/UploadForm";
import { useAppSelector } from "../../hooks";
import React, { useState } from "react";
import Modal from "../Modal";
import "./PlayerHeader.css";

export const PlayerHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const songsList = useAppSelector(state => state.player);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

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