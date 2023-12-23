import { Link, useNavigate } from 'react-router-dom';
import { GetBlogs } from '../../DataUtils/AxiosGet';
import { useEffect, useState } from 'react';
import PostLine from './PostLIne';
export default function PostComponent() {
    const navi = useNavigate();
    const [blogs, setBlogs] = useState();
    const handleAdd = () => {
        navi('/post/edit');
    };
    useEffect(() => {
        async function fetchData() {
            const data = await GetBlogs();
            if (data.code == 'ERR NETWORK') {
                console.log('err');
            } else {
                setBlogs(data);
            }
        }
        fetchData();
    }, []);

    return (
        <div style={{ padding: '80px' }}>
            <h2>Mini posts</h2>
            {blogs?.map((blog) => {
                return (
                    <div key={blog.blogId}>
                        <PostLine blogInfo={blog}></PostLine>
                    </div>
                );
            })}
            <button onClick={handleAdd}>add</button>
        </div>
    );
}
