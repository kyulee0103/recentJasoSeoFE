import {useRecoilState} from 'recoil'
import styled from 'styled-components'
import {fourthHelperState} from '../recoil/helper'

const Total = styled.div`
    textarea {
        resize: none;
        border: 0;
        background-color: #f4f5f7;
        width: 100%;
        margin-top: 15px;
        height: 50vh;
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

function Fourth() {
    const [fourthHelper, setFourthHelper] = useRecoilState(fourthHelperState)
    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFourthHelper((curr) => ({
            ...curr,
            contents: e.target.value,
            counts: e.target.value.length,
        }))
        if (fourthHelper.counts > 1) {
            setFourthHelper((curr) => ({
                ...curr,
                isFilled: true,
            }))
        } else {
            setFourthHelper((curr) => ({
                ...curr,
                isFilled: false,
            }))
        }
    }
    return (
        <Total>
            <Line2>
                <textarea
                    value={fourthHelper.contents}
                    onChange={onChangeContents}
                    placeholder="자기소개서 내용을 입력해주세요. "
                />
            </Line2>
        </Total>
    )
}

export default Fourth
