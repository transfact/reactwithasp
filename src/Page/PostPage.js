import { useNavigate } from 'react-router-dom';
import useLoginCheck from '../CustomHook/useLoginCheck';
import MainHeader from '../component/Headers/MainHeader';
import PostComponent from '../component/PostCompo/PostComponent';

export default function PostPage() {
    const loginCheck = useLoginCheck();
    const navigate = useNavigate();
    if (loginCheck.code == 'home') {
        navigate('/');
    }
    return (
        <div style={{ position: 'relative' }}>
            <MainHeader />
            <PostComponent />
        </div>
    );
}
