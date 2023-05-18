import {useEffect, useState} from 'react'
import styled from 'styled-components'
import First from './First'
import Second from './Second'
import Third from './Third'

const Total = styled.div`
    margin-right: 68px;
    height: 70vh;
    background-color: #ffffff;
    box-shadow: 6px 11px 23px rgba(204, 209, 221, 0.5);
    display: flex;
`
const MyAnswer = styled.div`
    width: 63%;
    height: 100%;
    /* background-color: #fd8b8b; */
`
const GptAnswer = styled.div`
    width: 37%;
    height: 100%;
`
const GptTop = styled.div`
    height: 22px;
    padding: 22px;
    background: #9980fc;
    p {
        margin: 0;
        color: #ffffff;
        font-weight: 700;
        font-size: 22px;
    }
`
const GptContents = styled.div`
    p {
        color: #202123;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
    }
    padding: 22px;
    border-left: 2px solid rgba(143, 152, 169, 0.48);
    flex: 1;
    height: calc(100% - 110px);
    overflow: scroll;
`

const Top = styled.div`
    height: 22px;
    padding: 22px;
    background: #ffffff;
    p {
        margin: 0;
        color: #202123;
        font-weight: 700;
        font-size: 22px;
    }
`
const ContentsBox = styled.div`
    margin: 0px 22px;
    flex: 1;
    background-color: #f4f5f7;
    height: calc(100% - 198px);
    padding: 22px;
`

const AnswerFooter = styled.div`
    display: flex;
    margin: 22px;
    justify-content: space-between;
    align-items: center;
`
const Counts = styled.div``

const Purple = styled.span`
    color: #9980fc;
    font-weight: 700;
    font-size: 20px;
`
const Grey = styled.span`
    color: #8a919d;
    font-weight: 500;
    font-size: 20px;
`
const Complete = styled.div``
const Btn1 = styled.button`
    background: #8a919d;
    border-radius: 8px;
    height: 44px;
    width: 149px;
    border: 0;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
`

const Btn2 = styled.button`
    background: #9980fc;
    border-radius: 8px;
    height: 44px;
    width: 149px;
    border: 0;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
`

function AnswerBox({id}: {id: number}) {
    const [name, setName] = useState('')
    useEffect(() => {
        if (id === 0) {
            setName('초안 작성 도우미')
        } else if (id === 1) {
            setName('내용 수정 도우미')
        } else if (id === 2) {
            setName('문장 가독성 도우미')
        } else if (id === 3) {
            setName('면접 질문 생성 도우미')
        }
    }, [])
    return (
        <>
            <Total>
                <MyAnswer>
                    <Top>
                        <p>{name}</p>
                    </Top>
                    <ContentsBox>
                        {id === 0 && <First />}
                        {id === 1 && <Second />}
                        {(id === 2 || id === 3) && <Third />}
                    </ContentsBox>
                    <AnswerFooter>
                        <Counts>
                            <Purple>234</Purple>
                            <Grey> / 1000 (글자수)</Grey>
                        </Counts>
                        <Complete>
                            <Btn1 disabled>작성완료</Btn1>
                            {/* <Btn2>작성완료</Btn2> */}
                        </Complete>
                    </AnswerFooter>
                </MyAnswer>
                <GptAnswer>
                    <GptTop>
                        <p>요즘 AI 도우미 답변</p>
                    </GptTop>
                    <GptContents>
                        <p>
                            햇살은 우릴 위해 내리고 바람도 서롤 감싸게 했죠 우리 웃음속에 계절은 오고 또 갔죠 바람에
                            흔들리는 머리결 내게 불어오는 그대향기 예쁜 두눈도 웃음소리도 모두가 내것이었죠 이런 사랑
                            이런 행복 쉽다 했었죠 이런 웃음 이런 축복 내게 쉽게 올리 없죠 눈물조차 울음조차 닦지 못한 나
                            정말로 울면 내가 그댈 보내준 것 같아서 그대 떠나가는 그 순간도 나를 걱정 했었나요 무엇도
                            해줄 수 없는 내 맘 앞에서 그댄 나를 떠나간다 해도 난 그댈 보낸적 없죠 여전히 그댄 나를
                            살게하는 이유일테니 이런사랑 이런행복 쉽다 했었죠 이런 웃음 이런 축복 내게 쉽게 올리 없죠
                            눈물조차 울음조차 닦지 못한 나 정말로 울면 내가 그댈 보내준 것 같아서 그대 떠나가는 그
                            순간도 나를 걱정 했었나요 무엇도 해줄 수 없는 내 맘 앞에서 그댄 나를 떠나간다 해도 난 그댈
                            보낸적 없죠 기다림으로 다시 시작일테니 얼마나 사랑했는지 얼마나 더욱 사랑했는지 그대여
                            한순간조차 잊지말아요(잊지말아요) 거기 떠나간 그 곳에서 날 기억하며 기다려요 (날 기억해줘요)
                            한없이 그대에게 다가가는 나일테니햇살은 우릴 위해 내리고 바람도 서롤 감싸게 했죠 우리
                            웃음속에 계절은 오고 또 갔죠 바람에 흔들리는 머리결 내게 불어오는 그대향기 예쁜 두눈도
                            웃음소리도 모두가 내것이었죠 이런 사랑 이런 행복 쉽다 했었죠 이런 웃음 이런 축복 내게 쉽게
                            올리 없죠 눈물조차 울음조차 닦지 못한 나 정말로 울면 내가 그댈 보내준 것 같아서 그대
                        </p>
                    </GptContents>
                </GptAnswer>
            </Total>
        </>
    )
}

export default AnswerBox
