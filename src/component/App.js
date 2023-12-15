import { useEffect, useState } from 'react';
import '../constant/css/App.css';
import { GetMember } from '../DataUtils/AxiosGet';

function App() {
    const [member, setMember] = useState();
    useEffect(() => {
        async function fetchData() {
            const data = await GetMember();
            if (data.code == 'ERR NETWORK') {
                console.log('err');
            } else {
                console.log(data);
                setMember(data);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="mainpostbody">
            <div>WeatherForecast!</div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Summary</th>
                        <th>TemperatureC</th>
                        <th>TemperatureF</th>
                    </tr>
                </thead>
                <tbody>
                    {member &&
                        member.map((item, idx) => (
                            <tr key={idx}>
                                <th>{item.date}</th>
                                <th>{item.summary}</th>
                                <th>{item.temperatureC}</th>
                                <th>{item.temperatureF}</th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
