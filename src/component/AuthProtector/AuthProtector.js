import { Outlet, useNavigate } from 'react-router-dom';
import useLoginCheck from '../../CustomHook/useLoginCheck';

export default function AuthProtector({ Renders }) {
    const loginCheck = useLoginCheck();
    const navigate = useNavigate();

    if (loginCheck.code == 'home') {
        navigate('/');
        return null;
    }
    return <Renders></Renders>;
}
