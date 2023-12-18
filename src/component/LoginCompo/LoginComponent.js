import { useState } from 'react';
import LoginButton from './LoginButton';

export default function LoginComponent() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={{ paddingTop: '80px' }}>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <LoginButton type="button" email={id} pw={password}>
                로그인
            </LoginButton>
        </div>
    );
}
