import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        initPost(state, action) {
            state = action.payload;
        },
    },
});

const postAction = postSlice.actions;
export { postAction };
export default postSlice.reducer;
