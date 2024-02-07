export interface SettingsState {
    beats: number;
}

export interface TempoState {
    tempo: number;
    lastTimestamps: number[];
    averageFrom: number;
}

export interface AppState {
    settings: SettingsState;
    tempo: TempoState;
}
