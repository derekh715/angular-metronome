import { createReducer, on } from "@ngrx/store";
import { changeTempo, detectTempo } from "./actions";
import { TempoState } from "./types";

export const initialState: TempoState = {
    lastTimestamps: [],
    tempo: 120,
    averageFrom: 1,
};

export const tempoReducer = createReducer(
    initialState,
    on(changeTempo, (state, { tempo }) => {
        return {
            ...state,
            tempo,
        };
    }),
    on(detectTempo, (state, { timestamp }) => {
        const now = timestamp ?? Date.now();
        const lastTimestamps: number[] = [...state.lastTimestamps];
        lastTimestamps.push(now);
        if (lastTimestamps.length === 1) {
            return {
                ...state,
                tempo: -1, // for first time
                lastTimestamps,
            };
        }
        if (lastTimestamps.length > 10) {
            lastTimestamps.shift();
        }

        const tempo =
            lastTimestamps
                .slice(lastTimestamps.length - 1 - state.averageFrom)
                .reduce((acc, _, index, arr) => {
                    if (index - 1 < 0) {
                        return acc;
                    }
                    const delta = arr[index] - arr[index - 1];
                    return acc + (1000 / delta) * 60;
                }, 0) / state.averageFrom;

        return {
            ...state,
            tempo,
            lastTimestamps,
        };
    })
);
