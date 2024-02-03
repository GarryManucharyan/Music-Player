import { SongListType, SongType } from "../../types";
import { SongRow } from "../SongRow/SongRow";
import { useAppSelector } from "../../hooks"
import "./SongList.css"

export const SongList: React.FC = () => {
    const songList: SongListType = useAppSelector(state => state.player)

    return (
        <div>
            <div className="list-header">
                <div className="empty-block"></div>
                <div className="list-header-wrapper">
                    <div className="header-block">Song Name</div>
                    <div className="header-block">Artist Name</div>
                    <div className="header-block">Track</div>
                </div >
                <div className="empty-block"></div>
            </div>
            {songList.map((song: SongType) => {
                return (
                    <SongRow song={song} key={song.id} />
                )
            })}
        </div>
    )
}