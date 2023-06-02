import styled from 'styled-components'

const Total = styled.div`
    height: 375px;
    text-align: center;
    background: #573fca;
    padding-top: 60px;
`

const Title = styled.div`
    p {
        color: #ffffff;
        font-weight: 700;
        font-size: 40px;
    }
    width: 130px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
`
const Round = styled.div`
    width: 13px;
    height: 13px;
    background: #ffffff;
    border-radius: 100px;
    position: absolute;
    top: 0;
    right: 0;
`
const Middle = styled.p`
    color: #ffffff;
    font-weight: 600;
    font-size: 26px;
`
const Btn = styled.div`
    button {
        margin-top: 30px;
        width: 250px;
        height: 85px;
        border: 0;
        background: rgba(0, 0, 0, 0.01);
        border: 2px solid #ffffff;
        border-radius: 60px;
        color: #ffffff;
        font-weight: 700;
        font-size: 26px;
    }
`

function OpenKakao() {
    return (
        <Total>
            <Title>
                <p>Q&A</p>
                <Round />
            </Title>
            <Middle>요즘자소서에게 궁금한 게 있다면 언제든지 연락하세요.</Middle>
            <Btn>
                <button>오픈 카톡</button>
            </Btn>
        </Total>
    )
}

export default OpenKakao
