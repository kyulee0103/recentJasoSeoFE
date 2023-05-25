import {useRecoilValue} from 'recoil'
import Loading from '../../assets/loading.gif'
import {FourthAnswerState} from '../../recoil/helper'
import styled from 'styled-components'

const Total = styled.div`
    img {
        width: 50%;
        margin-top: 150px;
    }
    p {
        line-height: 150%;
        color: #202123;
        font-size: 18px;
    }
    display: flex;
    justify-content: center;
`

function FourthAnswer() {
    const answerData = useRecoilValue(FourthAnswerState)
    return (
        <Total>
            {answerData.waiting ? (
                <img src={Loading} alt="loading" />
            ) : (
                <p dangerouslySetInnerHTML={{__html: answerData.answer}} />
            )}
        </Total>
    )
}
export default FourthAnswer
