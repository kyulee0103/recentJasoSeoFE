import {useRecoilValue} from 'recoil'
import {FirstAnswerState} from '../../recoil/helper'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import Loading from '../../assets/103592-loading-rocket-purple (1).json'

const Total = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Word = styled.p`
    line-height: 150%;
    color: #202123;
    font-size: 18px;
    margin: 0;
`

const Err = styled.p`
    line-height: 150%;
    color: #cd2c10;
    font-size: 26px;
    margin: 0;
`

function FirstAnswer() {
    const answerData = useRecoilValue(FirstAnswerState)
    return (
        <Total>
            {answerData.waiting ? (
                <Lottie animationData={Loading} style={{width: '600px'}} />
            ) : answerData.error ? (
                <>
                    <Err>Chat GPT에 문제가 있어요!</Err>
                    <Err>페이지를 새로고침 한 후에 다시 시도해주세요 🥺</Err>
                </>
            ) : (
                <Word dangerouslySetInnerHTML={{__html: answerData.answer}} />
            )}
        </Total>
    )
}
export default FirstAnswer
