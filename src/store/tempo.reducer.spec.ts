import { detectTempo } from "./actions";
import { initialState, tempoReducer } from "./tempo.reducer";

describe("tempop reducer", () => {
    describe("detect tempo", () => {
        it("should return negative one on first call", () => {
            const state = tempoReducer(
                initialState,
                detectTempo({ timestamp: 0 })
            );

            expect(state.lastTimestamps).toEqual([0]);
            expect(state.tempo).toBe(-1);
        });

        it("should calculate tempo correctly when average from is set to 1", () => {
            // takes 500ms, that is  2 taps per second
            let state = tempoReducer(
                { ...initialState, lastTimestamps: [0] },
                detectTempo({ timestamp: 500 })
            );

            expect(state.lastTimestamps).toEqual([0, 500]);
            expect(state.tempo).toBe(120);

            // takes 1000ms, that is 1 tap per second
            state = tempoReducer(state, detectTempo({ timestamp: 1500 }));

            expect(state.lastTimestamps).toEqual([0, 500, 1500]);
            expect(state.tempo).toBe(60);
        });

        it("should calculate tempo correctly when average from is set to 2", () => {
            // takes 500ms, that is 2 taps per second
            let state = tempoReducer(
                { ...initialState, averageFrom: 2, lastTimestamps: [0, 500] },
                detectTempo({ timestamp: 1500 })
            );

            expect(state.tempo).toBe(90);

            // takes 1000ms, that is 1 tap per second
            state = tempoReducer(state, detectTempo({ timestamp: 2500 }));
            expect(state.tempo).toBe(60);
        });
    });
});
