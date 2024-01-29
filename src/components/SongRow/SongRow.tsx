import { useEffect } from "react";

import { playSong } from "../../store/playerSlice";
import { useAppDispatch } from "../../hooks";
import { Icon } from "../IconSVG/IconSVG";
import { SongType } from "../../types";
import "./SongRow.css";
import { useAudio } from "../../hooks/useAudio";

export const SongRow: React.FC<{ song: SongType }> = ({ song }) => {
    const { songName, artistName, trackNumber, isPlayed, id, path } = { ...song }
    const audio: HTMLAudioElement | undefined = useAudio(path)
    const dispatch = useAppDispatch();

    const playMusic = () => {
        dispatch(playSong({ id }))
    }


    useEffect(() => {
        if (audio) {
            if (isPlayed) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }, [isPlayed])

    return (
        <div>
            <div className={isPlayed ? "song-row song-row-onplay" : "song-row"}>
                <div className="corner-block">
                    <div className="icon">
                        <Icon path="drag-handle.svg" />
                    </div>
                    <div className="icon" onClick={playMusic}>
                        <Icon path={`${isPlayed ? 'pause' : 'play'}.svg`} />
                    </div>
                </div>
                <div className="song-content-wrapper">
                    <div className="song-data-block">{songName}</div>
                    <div className="song-data-block">{artistName}</div>
                    <div className="song-data-block">{trackNumber}</div>
                </div >
                <div className="corner-block">
                    <div className="icon">
                        <Icon path="heart.svg" />
                    </div>
                    <div className="icon">
                        <Icon path="done.svg" />
                    </div>
                    <div className="icon">
                        <Icon path="share.svg" />
                    </div>
                    <div className="icon">
                        <Icon path="dropdown.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}