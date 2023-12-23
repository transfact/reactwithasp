import { Outlet, useNavigate } from 'react-router-dom';
import useLoginCheck from '../CustomHook/useLoginCheck';
import MainHeader from '../component/Headers/MainHeader';
import PostComponent from '../component/PostCompo/PostComponent';

export default function PostPage(props) {
    return (
        <div style={{ position: 'relative' }}>
            <MainHeader />
            <PostComponent />
        </div>
    );
}
