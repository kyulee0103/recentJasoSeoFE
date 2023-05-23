import styled from 'styled-components'
import Lottie from 'lottie-react'
import Rocket from '../assets/96654-rocket-light.json'

const Total = styled.div`
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const Title = styled.p`
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.2rem;
`
const Detail = styled.p`
    margin-bottom: 2px;
    margin-top: 2px;
    font-size: 16px;
`

const Btn = styled.button`
    margin-top: 50px;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    background: #9980fc;
`

function Mobile() {
    const onClickBtn = () => {
        window.navigator.clipboard.writeText('https://yozmjasoseo.com').then(() => {
            alert('복사 완료!')
        })
    }
    return (
        <Total>
            <Lottie
                animationData={Rocket}
                style={{
                    width: '200px',
                    textAlign: 'center',
                }}
            />
            <Title>PC 버전으로 접속해주세요</Title>
            <Detail>아직 모바일에서는 지원하지 않아요🥺</Detail>
            <Detail>PC 환경에서 요즘 자소서를 이용해주세요!</Detail>
            <Btn onClick={() => onClickBtn()}>링크 복사하기</Btn>
        </Total>
    )
}

export default Mobile
