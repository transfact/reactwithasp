import { createBrowserRouter } from 'react-router-dom';

import App from '../component/App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: '/about',
        element: <div>About</div>,
    },
    {
        path: '*',
        element: <div>nocontent</div>,
    },
]);

export default router;
