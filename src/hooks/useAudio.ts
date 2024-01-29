import { useEffect, useState } from "react";

/**  Custom hook to manage audio playback. */
export const useAudio = (path: string): HTMLAudioElement | undefined => {
    const [song, setSong] = useState<HTMLAudioElement | undefined>();

    useEffect(() => {
        (async function () {
            try {
                // Dynamically import the audio file
                let importedSong = await import(`../songs/${path}`);
                setSong(new Audio(importedSong.default));
            } catch (error) {
                console.error(`Error loading audio: ${error}`);
                setSong(undefined);
            }
        })();
    }, [path]);

    return song;
};
