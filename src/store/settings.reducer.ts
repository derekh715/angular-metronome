import { createReducer, on } from "@ngrx/store";
import { changeSettings } from "./actions";
import { SettingsState } from "./types";

export const initialState: SettingsState = {
    beats: 4,
};

export const settingsReducer = createReducer(
    initialState,
    on(changeSettings, (_, payload) => {
        return payload;
    })
);
