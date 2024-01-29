import { useState } from "react";
import Modal from "../Modal";
import { PlayerHeader } from "../Player-header/PlayerHeader";
import { SongList } from "../Song-list/SongList";
import { UploadForm } from "../Upload-form/UploadForm";
import "./MusicPlayer.css";

export const MusicPlayer: React.FC = () => {
    return (
        <div className="music-player">
            <PlayerHeader />
            <SongList />
        </div>
    )
}