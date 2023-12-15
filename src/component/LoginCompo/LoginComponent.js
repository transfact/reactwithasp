import { useState } from 'react';

export default function LoginComponent() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id, password);
    };
    return (
        <form style={{ paddingTop: '80px' }} onSubmit={handleSubmit}>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">로그인</button>
        </form>
    );
}
