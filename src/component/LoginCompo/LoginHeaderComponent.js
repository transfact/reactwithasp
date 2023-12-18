import { useState } from 'react';
import LoginButton from './LoginButton';
import useLoginCheck from '../../CustomHook/useLoginCheck';

export default function LoginHeaderComponent() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <input type="email" placeholder="이메일" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <LoginButton email={id} pw={password} />
        </div>
    );
}
