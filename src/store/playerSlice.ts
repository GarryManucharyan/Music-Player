import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SongListType, SongType } from "../types";


const initialState: SongListType = [
    {
        songName: 'Shape of You',
        artistName: 'Ed Sheeran',
        trackNumber: 1,
        id: 0,
        isPlayed: false,
        path: 'shape-of-you.mp3'
    },
    {
        songName: 'Bad Guy',
        artistName: 'Billie Eilish',
        trackNumber: 2,
        id: 1,
        isPlayed: false,
        path: 'bad-guy.mp3'
    },
    {
        songName: 'Despacito',
        artistName: 'Luis Fonsi ft. Daddy Yankee',
        trackNumber: 3,
        id: 2,
        isPlayed: false,
        path: 'despacito.mp3'

    },
    {
        songName: 'Bohemian Rhapsody',
        artistName: 'Queen',
        trackNumber: 4,
        id: 3,
        isPlayed: false,
        path: 'bohemian-rhapsody.mp3'
    },
    {
        songName: 'Lose Yourself',
        artistName: 'Eminem',
        trackNumber: 5,
        id: 4,
        isPlayed: false,
        path: 'lose-yourself.mp3'

    },
];


const playerSlice = createSlice({
    name: "playerSlice",
    initialState,

    reducers: {
        playSong: (state: SongListType, { payload }: PayloadAction<{ id: number }>) => {
            state = state.map((el: SongType) => {
                if (el.id === payload.id) {
                    el.isPlayed = !el.isPlayed
                } else {
                    el.isPlayed = false
                }
                return el
            })
        }
    }
})

export const { playSong } = playerSlice.actions

export default playerSlice.reducer