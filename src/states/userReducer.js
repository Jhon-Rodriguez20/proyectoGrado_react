import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    connected: false,
    user: {}
}

const userReducer = createSlice({
    name: 'FESC-ideaBank',
    initialState,
    reducers: {
        user: (state, action) => {
            state.connected = action.payload.connected
            state.user = action.payload.user
        }
    }
});

export const { user } = userReducer.actions;
export default userReducer.reducer;