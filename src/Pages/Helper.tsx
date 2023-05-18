import styled from 'styled-components'
import Header from '../Components/Header'
import BasicTabs from '../Components/BasicTabs'

const White = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    padding-left: 68px;
    padding-right: 68px;
    padding-top: 25px;
`

function Helper() {
    return (
        <>
            <Header />
            <White>
                <BasicTabs />
            </White>
        </>
    )
}

export default Helper
