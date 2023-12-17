import axios from 'axios';

export async function PostLoginMember(loginData) {
    console.log(loginData);
    try {
        const result = await axios({
            method: 'POST',
            url: 'https://localhost:7281/api/Members/Login',
            data: loginData,
            withCredentials: true,
        });
        console.log('resu', result);
        if (result.status === 201) {
            return result;
        } else {
            alert('로그인 에러 : 정보가 틀렸습니다.');
            return result;
        }
    } catch (e) {
        console.log(e);
        const err = { code: 'ERR NETWORK' };
        return err;
    }
}
