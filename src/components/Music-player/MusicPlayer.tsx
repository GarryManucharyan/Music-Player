import { PlayerHeader } from "../Player-header/PlayerHeader";
import { SongList } from "../Song-list/SongList";
import "./MusicPlayer.css";

export const MusicPlayer: React.FC = () => {
    return (
        <div className="music-player">
            <PlayerHeader />
            <SongList />
        </div>
    )
}