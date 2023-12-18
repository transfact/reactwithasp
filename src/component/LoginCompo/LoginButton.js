import { useNavigate } from 'react-router-dom';
import { PostLoginMember } from '../../DataUtils/AxiosPost';

export default function LoginButton(props) {
    const navigate = useNavigate();
    const { email, pw } = props;
    const handleSubmit = async (e) => {
        if (pw == null || pw == '' || email == '' || email == null) {
            alert('pw id 입력');
            return;
        }
        e.preventDefault();
        const result = await PostLoginMember({ email: email, pw: pw });
        console.log(result);
        if (result.code == 'ERR NETWORK') {
            alert('서버 연결 실패');
        } else if (result.status == 201) {
            navigate('/');
        }
    };

    return (
        <button type="button" onClick={handleSubmit}>
            로그인
        </button>
    );
}
