import { configureStore } from "@reduxjs/toolkit";
import settingsSlicer from "./slicers/settingsSlicer";

export const store = configureStore({
    reducer: {
        settings: settingsSlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch