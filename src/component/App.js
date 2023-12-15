import { useEffect } from 'react';
import '../constant/css/App.css';
import axios from 'axios';
import { GetMember } from '../DataUtils/AxiosGet';

function App() {
    useEffect(() => {
        async function fetchData() {
            const data = GetMember();
            console.log(data);
        }
        fetchData();
    }, []);

    return <div>블로깅!</div>;
}

export default App;
