import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: number
}

const initialState: InitialState = {
    value: 0
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeValue: (state) => {
            state.value += 1
        }
    }
})

const { reducer, actions } = mainSlice;

export { reducer }
export const {
    changeValue
} = actions