export type SongType = {
    songName: string,
    artistName: string,
    trackNumber: number,
    id: number,
    isPlayed: boolean,
    path: string
}

export type SongListType = SongType[];


export type ButtonPropsType = {
    buttonName: string,
    onClick?: () => void
}