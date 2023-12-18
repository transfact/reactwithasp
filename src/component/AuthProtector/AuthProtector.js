import { Outlet, useNavigate } from 'react-router-dom';
import useLoginCheck from '../../CustomHook/useLoginCheck';

export default function AuthProtector() {
    const loginCheck = useLoginCheck();
    const navigate = useNavigate();

    if (loginCheck.code == 'home') {
        navigate('/');
    }
    return <Outlet />;
}
