import { createBrowserRouter } from 'react-router-dom';

import StartPage from '../Page/StartPage';
import LoginPage from '../Page/LoginPage';
import PostPage from '../Page/PostPage';
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
        element: <PostPage />,
    },
    {
        path: '*',
        element: <div>nocontent</div>,
    },
]);

export default router;
