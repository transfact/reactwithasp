import { createBrowserRouter } from 'react-router-dom';

import StartPage from '../Page/StartPage';
import LoginPage from '../Page/LoginPage';
import PostPage from '../Page/PostPage';
import AuthProtector from '../component/AuthProtector/AuthProtector';
import PostAddPage from '../Page/PostAddPage';
import PostShowPage from '../Page/PostShowPage';

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
        element: <AuthProtector Renders={PostPage} />,
    },
    {
        path: '/post/edit',
        element: <AuthProtector Renders={PostAddPage} />,
    },
    {
        path: '/post/:id',
        element: <AuthProtector Renders={PostShowPage} />,
    },
    {
        path: '*',
        element: <div>nocontent</div>,
    },
]);

export default router;
