import { Link } from 'react-router-dom';
import LoginHeaderComponent from '../LoginCompo/LoginHeaderComponent';
import useLoginCheck from '../../CustomHook/useLoginCheck';

export default function MainHeader() {
    const loginCheck = useLoginCheck();
    const handleLogout = () => {
        loginCheck.removeCookie('LoginCookie');
    };

    return (
        <div className="main header">
            <div>
                <Link to={'/'}>
                    <img className="logo" alt="logo" src={'logo192.png'} />
                </Link>
            </div>
            <div>{loginCheck.code == 'home' ? <Link to={'/login'}>드롭다운</Link> : <Link to={'/post'}>포스트</Link>}</div>
            {loginCheck.code == 'home' ? <LoginHeaderComponent /> : <div onClick={handleLogout}>{loginCheck.nickName}님 환영합니다. 로그아웃 </div>}
        </div>
    );
}
