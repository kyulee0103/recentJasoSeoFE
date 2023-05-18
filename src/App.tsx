import {Outlet} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import {RecoilRoot} from 'recoil'

function App() {
    return (
        <>
            <RecoilRoot>
                <ScrollToTop />
                <Outlet />
            </RecoilRoot>
        </>
    )
}

export default App
