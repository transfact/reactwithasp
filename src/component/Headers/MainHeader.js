import { Link } from 'react-router-dom';
import LoginHeaderComponent from '../LoginCompo/LoginHeaderComponent';

export default function MainHeader() {
    return (
        <div className="main header">
            <div>
                <Link to={'/'}>
                    <img className="logo" alt="logo" src={'logo192.png'} />
                </Link>
            </div>
            <div>
                <Link to={'/login'}>드롭다운</Link>
            </div>
            <LoginHeaderComponent />
        </div>
    );
}
