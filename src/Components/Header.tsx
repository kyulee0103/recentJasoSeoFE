import {styled} from 'styled-components'
import Logo from '../assets/logo.png'

const Total = styled.div`
    /* background-color: red; */
    margin: 50px 62px;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3.7px solid #8f98a9;
    p {
        color: #202123;
        font-weight: 600;
        font-size: 20px;
        margin-right: 12px;
    }
    img {
        width: 163px;
        height: 37px;
    }
`

function Header() {
    return (
        <>
            <Total>
                <img src={Logo} />
                <p>반갑습니다, 회원님!</p>
            </Total>
        </>
    )
}

export default Header
