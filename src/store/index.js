//스토어에서는 data 중에서도, bloglist 데이터를 감지할 것임.
//blog는 그냥 ContextAPI 상태로 다룰려려고 ㅇㅇ
//그래서 cookie있음 / store 데이터 없음 -> 재요청
//그래서 cookie있음 / store 데이터 있음 -> 편안
// cookie 없음 / store 데이터 있음 -> 로그인 만료 페이지
// cookie 없음 / store 데이터 없음 -> 홈으로 튕

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        site,
    },
});

export default store;
