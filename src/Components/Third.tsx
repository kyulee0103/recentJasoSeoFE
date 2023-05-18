import styled from 'styled-components'

const Total = styled.div`
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

const Line2 = styled.div`
    display: flex;
`

function Third() {
    return (
        <Total>
            <Line2>
                <textarea placeholder="자기소개서 내용을 입력해주세요. " />
            </Line2>
        </Total>
    )
}

export default Third
