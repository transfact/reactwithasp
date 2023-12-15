import axios from 'axios';

export async function GetMember() {
    const result = await axios.get('https://localhost:7281/WeatherForecast');
    if (result.status === 200) {
        return result.data;
    } else {
        return result.error;
    }
}
