import "./UploadForm.css";

export const UploadForm = () => {
    return (
        <form>
            <input type="text" placeholder="Song Name" className="song-data-input" required />
            <input type="text" placeholder="Artist Name" className="song-data-input" required />
            <input type="file" required />
            <button type="button">Add</button>
        </form >
    )
}

