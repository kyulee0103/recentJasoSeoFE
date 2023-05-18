import styled from 'styled-components'
import Block from './Block'

const Total = styled.div`
    input {
        height: 40px;
        width: 100%;
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
        width: 100%;
        margin-top: 15px;
        height: 43vh;
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

function Second() {
    return (
        <Total>
            <Line>
                <input placeholder="제목을 입력해주세요." />
            </Line>
            <Block />
            <Line2>
                <textarea placeholder="자기소개서 내용을 입력해주세요. " />
            </Line2>
        </Total>
    )
}

export default Second
