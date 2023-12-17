import { useEffect } from 'react';
import App from '../component/App';
import MainHeader from '../component/Headers/MainHeader';
import '../constant/headerCss/MainHeader.css';
export default function StartPage() {
    return (
        <div style={{ position: 'relative' }}>
            <MainHeader />
            <App />
        </div>
    );
}
