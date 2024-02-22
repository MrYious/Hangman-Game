import { configureStore } from "@reduxjs/toolkit";
import gameDataSlicer from "./slicers/gameDataSlicer";
import settingsSlicer from "./slicers/settingsSlicer";

export const store = configureStore({
    reducer: {
        settings: settingsSlicer,
        gameData: gameDataSlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch