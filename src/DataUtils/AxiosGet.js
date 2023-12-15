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
