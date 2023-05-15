import {Outlet} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

function App() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    )
}

export default App
