import {styled} from 'styled-components'
import Logo from '../assets/logo.png'

const Total = styled.div`
    background-color: #ffffff;
    padding: 50px 62px 0px 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        color: #202123;
        font-weight: 600;
        font-size: 20px;
        position: absolute;
        right: 62px;
        margin-right: 12px;
    }
    img {
        width: 163px;
        height: 37px;
    }
`

const Main = styled.div`
    width: 100%;
    text-align: center;
`

function Header() {
    return (
        <>
            <Total>
                <Main>
                    <img src={Logo} />
                </Main>
                <p>반갑습니다, 회원님!</p>
            </Total>
        </>
    )
}

export default Header
