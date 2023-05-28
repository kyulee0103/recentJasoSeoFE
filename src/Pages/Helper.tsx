import styled from 'styled-components'
import Header from '../Components/Header'
import BasicTabs from '../Components/BasicTabs'

const White = styled.div`
    height: 48px;
    background-color: white;
    padding-left: 68px;
    padding-right: 68px;
`

const Total = styled.div``

function Helper() {
    return (
        <Total>
            <Header />
            <White>
                <BasicTabs />
            </White>
        </Total>
    )
}

export default Helper
