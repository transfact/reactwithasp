import { useState } from 'react';
import { PostLoginMember } from '../../DataUtils/AxiosPost';

export default function LoginHeaderComponent() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id, password);
        const result = await PostLoginMember({ email: id, pw: password });
        console.log('login result', result);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="이메일" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">로그인</button>
        </form>
    );
}
