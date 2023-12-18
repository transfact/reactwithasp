import axios from 'axios';

export async function GetMember() {
    try {
        const result = await axios.get('https://localhost:7281/WeatherForecast');
        if (result.status === 200) {
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

export async function GetBlogs() {
    try {
        const result = await axios.get('https://localhost:7281/api/Blogs');
        if (result.status === 200) {
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

export async function GetMemberByCookie() {
    try {
        const result = await axios({ method: 'GET', url: 'https://localhost:7281/api/Members/valid', withCredentials: true });
        if (result.status === 200) {
            return result.data;
        } else {
            return result;
        }
    } catch (e) {
        console.log(e);
        const err = { code: 'ERR NETWORK' };
        return err;
    }
}
