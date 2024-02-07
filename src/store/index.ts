import {
    ActionReducer,
    createFeatureSelector,
    createSelector,
} from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { AppState, SettingsState, TempoState } from "./types";

export function localStorageSyncReducer(
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
    // rehydrate will pull the values from localStorage when page loads
    return localStorageSync({ keys: ["settings", "tempo"], rehydrate: true })(
        reducer
    );
}

export const metaReducers = [localStorageSyncReducer];

export const selectSettings = createSelector(
    createFeatureSelector<SettingsState>("settings"),
    (state) => {
        return;
    }
);

export const selectTempo = createSelector(
    createFeatureSelector<TempoState>("tempo"),
    (state) => {
        return state;
    }
);
