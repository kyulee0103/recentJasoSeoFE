import {useRecoilValue} from 'recoil'
import {SecondAnswerState} from '../../recoil/helper'
import styled from 'styled-components'

const Total = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border: 0;
`

const Word = styled.p`
    line-height: 150%;
    color: #202123;
    font-size: 16px;
    margin: 0;
`

const Err = styled.p`
    line-height: 150%;
    color: #cd2c10;
    font-size: 26px;
    margin: 0;
`

function SecondAnswer() {
    const answerData = useRecoilValue(SecondAnswerState)
    return (
        <Total>
            {answerData.error ? (
                <>
                    <Err>Chat GPT에 문제가 있어요!</Err>
                    <Err>페이지를 새로고침 한 후에 다시 시도해주세요 🥺</Err>
                </>
            ) : (
                <Word dangerouslySetInnerHTML={{__html: answerData.answer.replace(/\n/g, '<br>')}} />
            )}
        </Total>
    )
}
export default SecondAnswer
