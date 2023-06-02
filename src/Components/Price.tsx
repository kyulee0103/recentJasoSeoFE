import Header from './Header'
import styled from 'styled-components'
import PriceCard from './Prices/PriceCard'
import QuestionBox from './Prices/QuestionBox'
import OpenKakao from './Prices/OpenKaKao'
import Footer from './Footer'

const Title = styled.div`
    text-align: center;
    margin-top: 74px;
    margin-bottom: 16px;
    position: relative;
    width: 870px;
    margin-left: auto;
    margin-right: auto;
    p {
        color: #5336c5;
        font-weight: 700;
        font-size: 40px;
        line-height: 150%;
        margin: 0;
    }
`

const Middle = styled.div`
    text-align: center;
    p {
        font-weight: 600;
        font-size: 26px;
        line-height: 150%;
        color: #9980fc;
        margin: 0;
    }
`
const Round = styled.div`
    width: 13px;
    height: 13px;
    background: #5336c5;
    border-radius: 100px;
    position: absolute;
    top: 0;
    right: 0;
`
const Cards = styled.div`
    display: flex;
    margin-top: 74px;
    justify-content: center;
`

const FirstBox = styled.div`
    height: 85vh;
`

function Price() {
    return (
        <>
            <Header />
            <FirstBox>
                <Title>
                    <p>자소서 작성의 시작과 끝, 요즘자소서로 쉽고 간편하게.</p>
                    <Round />
                </Title>
                <Middle>
                    <p>사용 목적에 따라 요금제를 자유롭게 선택하여 요즘자소서를 이용하세요!</p>
                    <p>가입과 친구 초대 이벤트를 통해 무료 이용권을 제공해드립니다.</p>
                </Middle>
                <Cards>
                    <PriceCard
                        priceChanged={false}
                        name="Free"
                        detail="가입 시 즉시 20개의 토큰을 제공되며,<br>친구 초대 시 추가로 토큰 20개가 지급됩니다!<br>아래 ‘무료 토큰 받기’ 버튼을 클릭하여<br>요즘자소서를 무료로 이용해 보세요!"
                        price="0"
                        buttonText="무료 토큰 받기"
                    />
                    <PriceCard
                        priceChanged={true}
                        name="토큰 100개 요금제"
                        detail="필요한 만큼 토큰을 구매하여 요즘자소서를<br>이용할 수 있는 요금제입니다.<br>아래 ‘구매하기’ 버튼을 클릭하여 토큰을 구매<br>하여, 요즘자소서를 이용해 보세요!"
                        price="2,900"
                        beforePrice="3,900"
                        buttonText="구매하기"
                    />
                    <PriceCard
                        priceChanged={true}
                        name="무제한 요금제"
                        detail="무제한으로 요즘자소서를 이용하고 싶을 때<br>선택할 수 있는 요금제입니다.<br>
					아래 ‘구매하기' 버튼을 클릭하여 무제한 요금<br>제를 구매하여, 요즘자소서를 이용해 보세요!"
                        price="7,900"
                        beforePrice="9,900"
                        buttonText="구매하기"
                    />
                </Cards>
            </FirstBox>
            <QuestionBox />
            <OpenKakao />
            <Footer />
        </>
    )
}

export default Price
