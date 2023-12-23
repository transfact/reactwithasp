import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetBlogById } from '../../../DataUtils/AxiosGet';
export default function PostShowComponent() {
    const navi = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            const result = await GetBlogById(id);
            if (result.code == 'SUCCESS') {
                setTitle(result.title);
                setPost(result.post);
            } else {
                alert('잘못된 접근입니다');
                navi('/');
            }
        }
        fetchData();
    }, [id, navi]);
    const handlePut = () => {};
    const handleDel = () => {
        console.log('del');
    };
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');

    return (
        <div style={{ padding: '80px' }}>
            <div>
                title : {title} post : {post}
            </div>
            <button onClick={handlePut}>수정</button>
            <button onClick={handleDel}>삭제</button>
        </div>
    );
}
