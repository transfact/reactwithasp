import useLoginCheck from '../CustomHook/useLoginCheck';

export default function PostPage() {
    const loginCheck = useLoginCheck();

    return (
        <div>
            <h1>Post Page</h1>
        </div>
    );
}
