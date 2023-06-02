import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import PickTemplate from './Pages/PickTemplate'
import Helper from './Pages/Helper'
import Error from './Pages/Error'
import {isMobile} from 'react-device-detect'
import Mobile from './Pages/Mobile'
import Price from './Components/Price'

const router = createBrowserRouter([
    isMobile
        ? {
              path: '/',
              element: <App />,
              children: [
                  {
                      path: '',
                      element: <Mobile />,
                  },
              ],
              errorElement: <Error />,
          }
        : {
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
                  {
                      path: 'price',
                      element: <Price />,
                  },
              ],
              errorElement: <Error />,
          },
])
export default router
