import { createAction, props } from "@ngrx/store";
import { SettingsState } from "./types";

export const changeTempo = createAction(
    "Change Tempo",
    props<{ tempo: number }>()
);

export const detectTempo = createAction(
    "Detect Tempo",
    props<{ timestamp?: number }>()
);

export const changeSettings = createAction(
    "Change Beats",
    props<SettingsState>()
);
