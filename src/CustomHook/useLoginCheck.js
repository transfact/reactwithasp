import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
export default function useLoginCheck() {
    const [cookies, setCookie, removeCookie] = useCookies(['LoginCookie']);
}
