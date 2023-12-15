import axios from 'axios';

export async function PostLoginMember(loginData) {
    console.log(loginData);
    try {
        const result = await axios({
            method: 'POST',
            url: 'https://localhost:7281/api/Members/Login',
            data: loginData,
        });
        console.log('resu', result);
        if (result.status === 201) {
            return result.data;
        } else {
            return result.error;
        }
    } catch (e) {
        console.log(e);
        const err = { code: 'ERR NETWORK' };
        return err;
    }
}
