import styled from 'styled-components'
import Box from '../../assets/QuestionCardBox.png'
const Round = styled.div`
    width: 13px;
    height: 13px;
    background: #5336c5;
    border-radius: 100px;
    position: absolute;
    top: 0;
    right: 0;
`

const Title = styled.div`
    text-align: center;
    margin-bottom: 16px;
    position: relative;
    width: 260px;
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

const QuestionCard = styled.div`
    img {
        width: 874.16px;
        height: 301.01px;
    }
    position: relative;
    margin-left: 15vh;
`

const QuestionCard2 = styled.div`
    img {
        width: 874.16px;
        height: 301.01px;
    }
    position: relative;
    margin-right: 15vh;
`

const Total = styled.div`
    background: linear-gradient(180deg, #e0d8ff 0%, rgba(224, 216, 255, 0) 100%);
    padding-top: 76px;
    height: 140vh;
`
const QPart = styled.div`
    display: flex;
    z-index: 100;
    align-items: center;
    position: absolute;
    top: 50px;
    left: 66px;
    p {
        color: #202123;
        font-weight: 700;
        font-size: 27.8907px;
        line-height: 150%;
        margin-left: 14px;
        margin-top: 5px;
        margin-bottom: 0;
        z-index: 100;
    }
`
const APart = styled.div`
    display: flex;
    position: absolute;
    z-index: 100;
    left: 66px;
    top: 120px;
`
const Big = styled.span`
    color: #9980fc;
    font-weight: 600;
    font-size: 38.6179px;
    z-index: 100;
`

const Grey = styled.span`
    color: #777777;
    font-weight: 700;
    font-size: 24px;
    line-height: 180%;
    z-index: 100;
`
const Purple = styled.span`
    color: #9980fc;
    font-weight: 700;
    font-size: 24px;
    line-height: 180%;
    z-index: 100;
`
const Answers = styled.div`
    margin-left: 14px;
    z-index: 100;
`
const Img = styled.img`
    position: absolute;
    top: 0;
`

const One = styled.div`
    margin-top: 70px;
`
const Two = styled.div`
    margin-top: 500px;
`
const Three = styled.div`
    margin-top: 1000px;
`

const Contents = styled.div`
    /* width: 50vw;
    background-color: red;
    z-index: 1000; */
`

function QuestionBox() {
    return (
        <>
            <Total>
                <Title>
                    <p>자주 묻는 질문</p>
                    <Round />
                </Title>
                {/* <Contents> */}
                <One>
                    <QuestionCard>
                        <QPart>
                            <Big>Q. </Big>
                            <p>가입 시 제공받은 토큰을 다 사용하면 어떻게 되나요?</p>
                        </QPart>
                        <APart>
                            <Big>A.</Big>
                            <Answers>
                                <Grey>가입 시 받은 토큰을 모두 사용한 이후에는 </Grey>
                                <Purple>요금제 결제</Purple>
                                <Grey>
                                    가 필요합니다.
                                    <br /> 가입 시 받는 무료 토큰 외에도
                                </Grey>
                                <Purple> 친구 초대</Purple>
                                <Grey>
                                    시 토큰 20개 추가 지급 이벤트를
                                    <br />
                                    진행 중이니 많은 참여 부탁드립니다!
                                </Grey>
                            </Answers>
                        </APart>
                        <Img src={Box} alt="box" />
                    </QuestionCard>
                </One>
                <Two>
                    <QuestionCard2>
                        <QPart>
                            <Big>Q. </Big>
                            <p>토큰이 남은 상태에서 무제한 요금제를 구매하면 어떻게 되나요?</p>
                        </QPart>
                        <APart>
                            <Big>A.</Big>
                            <Answers>
                                <Grey>
                                    토큰이 남은 상태에서 무제한 요금제를 구매하면 남은 토큰은
                                    <br />
                                </Grey>
                                <Purple>요금제가 종료되는 시점으로 이월</Purple>
                                <Grey>
                                    됩니다.
                                    <br />
                                    토큰이 남았더라도 필요에 따라 안심하고 무제한 요금제를 구매하세요!
                                </Grey>
                            </Answers>
                        </APart>
                        <Img src={Box} alt="box" />
                    </QuestionCard2>
                </Two>
                <Three>
                    <QuestionCard>
                        <QPart>
                            <Big>Q. </Big>
                            <p>요즘자소서에게 문의할 게 있으면 어떻게 하면 되나요?</p>
                        </QPart>
                        <APart>
                            <Big>A.</Big>
                            <Answers>
                                <Grey>요즘자소서 서비스에 문의할 것이 있다면 </Grey>
                                <Purple>오픈 카톡</Purple>
                                <Grey>
                                    을 통해 문의해주세요.
                                    <br /> 최대한 빠른 시일 내에 답변드리도록 하겠습니다 :)
                                </Grey>
                            </Answers>
                        </APart>
                        <Img src={Box} alt="box" />
                    </QuestionCard>
                </Three>
                {/* </Contents> */}
            </Total>
        </>
    )
}

export default QuestionBox
