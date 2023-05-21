import {styled} from 'styled-components'
import Logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'

const Total = styled.div`
    background-color: #ffffff;
    padding: 40px 62px 0px 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        color: #202123;
        font-weight: 600;
        font-size: 16px;
        position: absolute;
        right: 62px;
        margin-right: 18px;
    }
    img {
        width: 134px;
        height: 30px;
    }
`

const Main = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;
`

const ImgBox = styled.div``
function Header() {
    const navigate = useNavigate()
    return (
        <>
            <Total>
                <Main>
                    <ImgBox
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        <img src={Logo} alt="logo" />
                    </ImgBox>
                </Main>
                <p>반갑습니다, 회원님!</p>
            </Total>
        </>
    )
}

export default Header
