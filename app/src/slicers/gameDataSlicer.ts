import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Status = 'Inactive' | 'Active'
type Difficulty = 'Easy' | 'Normal' | 'Hard'

interface GameData {
    status: Status,
    category: string,
    difficulty: Difficulty,
    health: {
        currentHealth: number,
        maxHealth: number,
    },
    timeLimit: number,
    word: {
        selectedWord: string,
        guessedLetters: string[],
        requiredLetters: string[]
    }
}

interface Settings {
    timeLimit: number;
    health: number;
    difficulty: Difficulty;
}

const initialState: GameData = {
    status: 'Inactive',
    category: '',
    difficulty: "Normal",
    health: {
        currentHealth: 8,
        maxHealth: 8,
    },
    timeLimit: 0,
    word: {
        selectedWord: '',
        guessedLetters: [],
        requiredLetters: []
    }
}

const gameDataSlicer = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        setSettings(state, action: PayloadAction<Settings>) {
            state.timeLimit += action.payload.timeLimit
            state.health.currentHealth = action.payload.health
            state.health.maxHealth = action.payload.health
            state.difficulty = action.payload.difficulty
        },
    }
})

export default gameDataSlicer.reducer
export const { setSettings } = gameDataSlicer.actions