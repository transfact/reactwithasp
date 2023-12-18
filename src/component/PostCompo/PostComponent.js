import { GetBlogs } from '../../DataUtils/AxiosGet';
import { useEffect, useState } from 'react';
export default function PostComponent() {
    const [blogs, setBlogs] = useState();
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
            {blogs?.map((blog) => {
                return <div key={blog.blogId}>{blog.title}</div>;
            })}
        </div>
    );
}
