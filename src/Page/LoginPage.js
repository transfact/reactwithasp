import useLoginCheck from '../CustomHook/useLoginCheck';
import MainHeader from '../component/Headers/MainHeader';
import LoginComponent from '../component/LoginCompo/LoginComponent';

export default function LoginPage() {
    const loginCheck = useLoginCheck();
    return (
        <>
            <MainHeader></MainHeader>
            <LoginComponent></LoginComponent>
        </>
    );
}
