import { useCookies } from 'react-cookie';
import { GetMemberByCookie } from '../DataUtils/AxiosGet';
import { useEffect, useState } from 'react';
export default function useLoginCheck() {
    const [cookies, setCookie, removeCookie] = useCookies(['LoginCookie']);
    const [member, setMember] = useState('wait');
    useEffect(() => {
        async function getData() {
            const result = await GetMemberByCookie();
            if (result.code == 'ERR NETWORK' || result.code == 'ERR_BAD_REQUEST') {
                return;
            }
            setMember(result.data.nickName);
        }
        getData();
    }, [cookies]);

    if (cookies.LoginCookie == undefined) {
        return { code: 'home' };
    } else {
        return { code: cookies.LoginCookie, nickName: member, removeCookie };
    }
}
