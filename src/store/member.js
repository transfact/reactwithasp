//닉네임
//등급 : GUEST /GOLD /PLAT/PREMI
//isHTTP : true -> res에서 받아오는 식으로 하는게 나을까요
// 쿠키 확인할까요?  => 상황에 맞춰서 좋은걸로.
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        initMember(state, action) {
            state = action.payload;
        },
    },
});

const memberAction = memberSlice.actions;
export { memberAction };
export default memberSlice.reducer;
