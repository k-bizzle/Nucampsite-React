import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return { ...state, user: action.payload }; 
        }
    }
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.user;
