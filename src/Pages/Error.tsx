import styled from 'styled-components'
import Lottie from 'lottie-react'
import Err from '../assets/36395-lonely-404.json'

const Total = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
function Error() {
    return (
        <Total>
            <Lottie animationData={Err} style={{width: '1200px'}} />
        </Total>
    )
}

export default Error
