import MainHeader from '../component/Headers/MainHeader';
import PostShowComponent from '../component/PostCompo/PostShowPage/PostShowComponent';

export default function PostShowPage() {
    return (
        <div style={{ position: 'relative' }}>
            <MainHeader />
            <PostShowComponent></PostShowComponent>
        </div>
    );
}
