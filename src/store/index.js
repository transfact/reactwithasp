//스토어에서는 data 중에서도, blog 데이터를 감지할 것임.
//blog는 그냥 ContextAPI 상태로 다룰려려고 ㅇㅇ
//그래서 cookie있음 / store 데이터 없음 -> 재요청
//그래서 cookie있음 / store 데이터 있음 -> 편안
// cookie 없음 / store 데이터 있음 -> 로그인 만료 페이지
// cookie 없음 / store 데이터 없음 -> 홈으로 튕

//member

//지난 프로젝트 실패원인
//객체배열
//객체배열 관리하는 store 상태가 2개였어요 (새로고침 감지 / 로그인 관리) 플래너를 다 받아두고, redis)
//url로 받고, 그것만
// 멤버정보 nick/등급

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {},
});

export default store;
