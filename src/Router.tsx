import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import PickTemplate from './Pages/PickTemplate'
import Helper from './Pages/Helper'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <PickTemplate />,
            },
            {
                path: 'helper',
                element: <Helper />,
            },
        ],
    },
])
export default router
