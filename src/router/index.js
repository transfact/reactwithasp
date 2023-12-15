import { createBrowserRouter } from 'react-router-dom';

import StartPage from '../Page/StartPage';
import LoginPage from '../Page/LoginPage';

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
        path: '*',
        element: <div>nocontent</div>,
    },
]);

export default router;
