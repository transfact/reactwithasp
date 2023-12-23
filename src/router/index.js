import { createBrowserRouter } from 'react-router-dom';

import StartPage from '../Page/StartPage';
import LoginPage from '../Page/LoginPage';
import PostPage from '../Page/PostPage';
import AuthProtector from '../component/AuthProtector/AuthProtector';
const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage></StartPage>,
    },
    {
        path: '/about',
        element: <div>About</div>,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/post',
        element: (
            <AuthProtector>
                <PostPage />
            </AuthProtector>
        ),
    },
    {
        path: '*',
        element: <div>nocontent</div>,
    },
]);

export default router;
