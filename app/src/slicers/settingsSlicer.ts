import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Difficulty = 'Easy' | 'Normal' | 'Hard'

interface Settings {
    timeLimit: number,
    maxTimeLimit: number,
    difficulty: Difficulty,
    health: number,
    maxHealth: number,
}

interface Changes {
    timeLimit: number;
    health: number;
    difficulty: Difficulty;
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
        updateSettings: (state, action: PayloadAction<Changes>) => {
            state.timeLimit += action.payload.timeLimit
            state.health += action.payload.health
            state.difficulty = action.payload.difficulty
        },
        loadSettings: (_state, action: PayloadAction<Settings>) => action.payload,
        resetSettings: () => initialState
    }
})

export default settingsSlicer.reducer
export const { updateSettings, resetSettings, loadSettings } = settingsSlicer.actions