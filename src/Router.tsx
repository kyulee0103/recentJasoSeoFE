import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import PickTemplate from './Pages/PickTemplate'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <PickTemplate />,
            },
        ],
    },
])
export default router
