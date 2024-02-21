import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Difficulty = 'Easy' | 'Normal' | 'Hard'

interface Settings {
    timeLimit: number,
    maxTimeLimit: number,
    difficulty: Difficulty,
    health: number,
    maxHealth: number,
}

const initialState: Settings = {
    timeLimit: 0,
    maxTimeLimit: 10,
    difficulty: 'Normal',
    health: 8,
    maxHealth: 10,
}

const settingsSlicer = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        incTimeLimit(state, action: PayloadAction<number>) {
            state.timeLimit += action.payload
        },
    }
})

export default settingsSlicer.reducer
export const { incTimeLimit } = settingsSlicer.actions