import { useRef } from 'react';
import ReactQuill from 'react-quill';
import { PostAddEditor } from '../../DataUtils/AxiosPost';

export default function PostAddComponent() {
    const titleRef = useRef('');
    const contentRef = useRef('');
    const modules = {
        toolbar: {
            container: [['image'], [{ header: [1, 2, 3, 4, 5, false] }], ['underline', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list']],
        },
    };

    const handleEditorChange = (content, delta, source, editor) => {
        contentRef.current = content;
    };
    const saveEditor = async () => {
        const result = await PostAddEditor(titleRef.current.value, contentRef.current);
        console.log(result);
    };
    return (
        <>
            <h1>글 작성</h1>
            <div>
                <label>제목</label>
                <input ref={titleRef} type="text" />
            </div>

            <div>
                <ReactQuill style={{ width: '800px', height: '400px' }} modules={modules} onChange={handleEditorChange} />
            </div>
            <button style={{ marginTop: '50px' }} onClick={saveEditor}>
                저장
            </button>
        </>
    );
}
