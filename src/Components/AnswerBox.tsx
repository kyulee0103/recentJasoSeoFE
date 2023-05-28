import {useEffect, useState} from 'react'
import styled from 'styled-components'
import First from './First'
import Second from './Second'
import Third from './Third'
import {useRecoilState, useRecoilValue} from 'recoil'
import {
    FirstAnswerState,
    FourthAnswerState,
    SecondAnswerState,
    ThirdAnswerState,
    firstHelperState,
    fourthHelperState,
    secondHelperState,
    thirdHelperState,
} from '../recoil/helper'
import Fourth from './Fourth'
import axios from 'axios'
import FirstAnswer from './answers/FirstAnswer'
import SecondAnswer from './answers/SecondAnswer'
import FourthAnswer from './answers/FourthAnswer'
import ThirdAnswer from './answers/ThirdAnswer'
import Loading from '../assets/123243-white-loading-spinner.json'
import Lottie from 'lottie-react'

const Total = styled.div`
    height: 75vh;
    background-color: #ffffff;
    box-shadow: 6px 11px 23px rgba(204, 209, 221, 0.5);
    display: flex;
`
const MyAnswer = styled.div`
    width: 63%;
    height: 75vh;
`
const GptAnswer = styled.div`
    width: 37%;
    height: 75vh;
`
const GptTop = styled.div`
    height: 22px;
    display: flex;
    align-items: center;
    padding: 22px;
    background: #9980fc;
    p {
        margin: 0;
        color: #ffffff;
        font-weight: 700;
        font-size: 18px;
        margin-right: 10px;
    }
`
const GptContents = styled.div`
    padding: 22px;
    border-left: 2px solid rgba(143, 152, 169, 0.48);
    flex: 1;
    height: calc(75vh - 110px);
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
        font-size: 18px;
    }
`
const ContentsBox = styled.div`
    margin: 0px 22px;
    flex: 1;
    background-color: #f4f5f7;
    height: calc(75vh - 168px);
    padding: 10px 20px;
`

const AnswerFooter = styled.div`
    display: flex;
    margin: 22px 22px 0px 22px;
    justify-content: space-between;
    align-items: center;
`
const Counts = styled.div``

const Purple = styled.span`
    color: #9980fc;
    font-weight: 700;
    font-size: 16px;
`
const Grey = styled.span`
    color: #8a919d;
    font-weight: 500;
    font-size: 16px;
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
    font-size: 16px;
`

const Btn2 = styled.button`
    background: #9980fc;
    border-radius: 8px;
    height: 44px;
    width: 149px;
    border: 0;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
`

function AnswerBox({id}: {id: number}) {
    const firstData = useRecoilValue(firstHelperState)
    const secondData = useRecoilValue(secondHelperState)
    const thirdData = useRecoilValue(thirdHelperState)
    const fourthData = useRecoilValue(fourthHelperState)
    const [firstAnswer, setFirstAnswer] = useRecoilState(FirstAnswerState)
    const [secondAnswer, setSecondAnswer] = useRecoilState(SecondAnswerState)
    const [thirdAnswer, setThirdAnswer] = useRecoilState(ThirdAnswerState)
    const [fourthAnswer, setFourthAnswer] = useRecoilState(FourthAnswerState)
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
    }, [id])

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (id === 0) {
            setFirstAnswer((curr) => ({
                ...curr,
                waiting: true,
                answer: '',
            }))
            axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL,
                data: {
                    type: 0,
                    content: [firstData.company, firstData.work, firstData.question, firstData.experience],
                },
            })
                .then(function (response) {
                    setFirstAnswer((curr) => ({
                        ...curr,
                        answer: response.data.data,
                        waiting: false,
                    }))
                })
                .catch(function (err) {
                    // console.log(err)
                    setFirstAnswer((curr) => ({
                        ...curr,
                        answer: '',
                        error: true,
                    }))
                })
        } else if (id === 1) {
            setSecondAnswer((curr) => ({
                ...curr,
                waiting: true,
                answer: '',
            }))
            axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL,
                data: {
                    type: 1,
                    content: [secondData.work, secondData.question, secondData.contents],
                },
            })
                .then(function (response) {
                    setSecondAnswer((curr) => ({
                        ...curr,
                        answer: response.data.data,
                        waiting: false,
                    }))
                })
                .catch(function (err) {
                    // console.log(err)
                    setSecondAnswer((curr) => ({
                        ...curr,
                        answer: '',
                        error: true,
                    }))
                })
        } else if (id === 2) {
            setThirdAnswer((curr) => ({
                ...curr,
                waiting: true,
                answer: '',
            }))
            axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL,
                data: {
                    type: 2,
                    content: [thirdData.contents],
                },
            })
                .then(function (response) {
                    setThirdAnswer((curr) => ({
                        ...curr,
                        answer: response.data.data,
                        waiting: false,
                    }))
                })
                .catch(function (err) {
                    // console.log(err)
                    setThirdAnswer((curr) => ({
                        ...curr,
                        answer: '',
                        error: true,
                    }))
                })
        } else if (id === 3) {
            setFourthAnswer((curr) => ({
                ...curr,
                waiting: true,
                answer: '',
            }))
            axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL,
                data: {
                    type: 3,
                    content: [fourthData.contents],
                },
            })
                .then(function (response) {
                    setFourthAnswer((curr) => ({
                        ...curr,
                        answer: response.data.data,
                        waiting: false,
                    }))
                })
                .catch(function (err) {
                    // console.log(err)
                    setFourthAnswer((curr) => ({
                        ...curr,
                        answer: '',
                        error: true,
                    }))
                })
        }
    }
    return (
        <>
            <Total>
                <MyAnswer>
                    <Top>
                        <p>{name}</p>
                    </Top>
                    <form autoComplete="off" onSubmit={onSubmit}>
                        <ContentsBox>
                            {id === 0 && <First />}
                            {id === 1 && <Second />}
                            {id === 2 && <Third />}
                            {id === 3 && <Fourth />}
                        </ContentsBox>
                        <AnswerFooter>
                            <Counts>
                                {id === 1 && (
                                    <>
                                        <Purple>{secondData.counts}</Purple>
                                        <Grey> / 1000 (글자수)</Grey>
                                        <Grey> 공백 포함</Grey>
                                    </>
                                )}
                                {id === 2 && (
                                    <>
                                        <Purple>{thirdData.counts}</Purple>
                                        <Grey> / 1000 (글자수)</Grey>
                                        <Grey> 공백 포함</Grey>
                                    </>
                                )}
                                {id === 3 && (
                                    <>
                                        <Purple>{fourthData.counts}</Purple>
                                        <Grey> / 1000 (글자수)</Grey>
                                        <Grey> 공백 포함</Grey>
                                    </>
                                )}
                            </Counts>
                            <Complete>
                                {id === 0 &&
                                    (firstData.isFilled ? <Btn2>작성완료</Btn2> : <Btn1 disabled>작성완료</Btn1>)}
                                {id === 1 &&
                                    (secondData.isFilled ? <Btn2>작성완료</Btn2> : <Btn1 disabled>작성완료</Btn1>)}
                                {id === 2 &&
                                    (thirdData.isFilled ? <Btn2>작성완료</Btn2> : <Btn1 disabled>작성완료</Btn1>)}
                                {id === 3 &&
                                    (fourthData.isFilled ? <Btn2>작성완료</Btn2> : <Btn1 disabled>작성완료</Btn1>)}
                            </Complete>
                        </AnswerFooter>
                    </form>
                </MyAnswer>
                <GptAnswer>
                    <GptTop>
                        <p>요즘자소서 답변</p>
                        {id === 0 && firstAnswer.waiting && (
                            <Lottie
                                animationData={Loading}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                }}
                            />
                        )}
                        {id === 1 && secondAnswer.waiting && (
                            <Lottie
                                animationData={Loading}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                }}
                            />
                        )}
                        {id === 2 && thirdAnswer.waiting && (
                            <Lottie
                                animationData={Loading}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                }}
                            />
                        )}
                        {id === 3 && fourthAnswer.waiting && (
                            <Lottie
                                animationData={Loading}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                }}
                            />
                        )}
                    </GptTop>
                    <GptContents>
                        {id === 0 && <FirstAnswer />}
                        {id === 1 && <SecondAnswer />}
                        {id === 3 && <FourthAnswer />}
                        {id === 2 && <ThirdAnswer />}
                    </GptContents>
                </GptAnswer>
            </Total>
        </>
    )
}

export default AnswerBox
