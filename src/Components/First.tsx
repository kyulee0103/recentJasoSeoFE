import styled from 'styled-components'
import Block from './Block'

const Total = styled.div`
    p {
        width: 150px;
        font-weight: 600;
        font-size: 20px;
        color: #202123;
    }
    input {
        height: 40px;
        width: 90%;
        border: 0;
        background-color: #f4f5f7;
        font-size: 22px;
        &::placeholder {
            color: #8f98a9;
            font-weight: 500;
            font-size: 22px;
        }
        &:focus {
            outline: none;
        }
    }
    textarea {
        resize: none;
        border: 0;
        background-color: #f4f5f7;
        width: 90%;
        margin-top: 15px;
        height: 255px;
        font-size: 22px;
        &::placeholder {
            color: #8f98a9;
            font-weight: 500;
            font-size: 22px;
        }
        &:focus {
            outline: none;
        }
    }
`

const Line = styled.div`
    display: flex;
    align-items: center;
`

const Line2 = styled.div`
    display: flex;
`

function First() {
    return (
        <Total>
            <Line>
                <p>지원 회사</p>
                <input placeholder="지원하는 회사명을 입력해주세요. (ex. 현대자동차)" />
            </Line>
            <Block />
            <Line>
                <p>직무</p>
                <input placeholder="지원하는 직무 및 직군을 입력해주세요. (ex. 마케터)" />
            </Line>
            <Block />
            <Line>
                <p>질문</p>
                <input placeholder="자기소개서 문항을 입력해주세요. (ex. 협업 경험에 대해 서술하시오.)" />
            </Line>
            <Block />
            <Line2>
                <p>활동 경험</p>
                <textarea placeholder="활동 경험을 작성해주세요.(ex. ABC 프로젝트 마케터로 유저 유입 30% 증가) " />
            </Line2>
        </Total>
    )
}

export default First
