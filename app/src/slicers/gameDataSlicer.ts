import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Status = 'Inactive' | 'Active'
type Difficulty = 'Easy' | 'Normal' | 'Hard'

interface InitialGameData {
    category: string,
    word: string
}

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
        correctLetters: string[]
        requiredLetters: string[],
        attemptedLetters: string[],
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
        correctLetters: [],
        requiredLetters: [],
        attemptedLetters: [],
    }
}

const gameDataSlicer = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        setSettings: (state, action: PayloadAction<Settings>) => {
            state.timeLimit += action.payload.timeLimit
            state.health.currentHealth = action.payload.health
            state.health.maxHealth = action.payload.health
            state.difficulty = action.payload.difficulty
        },
        setInitialGameData: (state, action: PayloadAction<InitialGameData>) => {
            state.status = 'Active'
            state.word.selectedWord = action.payload.word
            state.word.requiredLetters = [...new Set(action.payload.word.split(''))]
            state.category = action.payload.category
        },
        correctGuess: (state, action: PayloadAction<string>) => {
            state.word.correctLetters.push(action.payload)
            state.word.requiredLetters = state.word.requiredLetters.filter(letter => letter !== action.payload)
        },
        incorrectGuess: (state, action: PayloadAction<string>) => {
            state.word.attemptedLetters.push(action.payload)
            state.health.currentHealth -= 1
        },
        stopGame: () => initialState
    }
})

export default gameDataSlicer.reducer
export const { setSettings, setInitialGameData, correctGuess, incorrectGuess, stopGame } = gameDataSlicer.actions