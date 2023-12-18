import { useCookies } from 'react-cookie';
import { GetMemberByCookie } from '../DataUtils/AxiosGet';
import { useEffect, useState } from 'react';
export default function useLoginCheck() {
    const [cookies, setCookie, removeCookie] = useCookies(['LoginCookie']);
    const [member, setMember] = useState('wait');
    useEffect(() => {
        async function getData() {
            const result = await GetMemberByCookie();
            console.log('데이터받기', result);
            setMember(result.nickName);
        }
        getData();
    }, [cookies]);

    if (cookies.LoginCookie == undefined) {
        return { code: 'home' };
    } else {
        return { code: cookies.LoginCookie, nickName: member, removeCookie };
    }
}
