import {useRecoilState} from 'recoil'
import styled from 'styled-components'
import {thirdHelperState} from '../recoil/helper'

const Total = styled.div`
    textarea {
        resize: none;
        border: 0;
        background-color: #f4f5f7;
        width: 100%;
        margin-top: 15px;
        height: 41vh;
        font-size: 18px;
        &::placeholder {
            color: #8f98a9;
            font-weight: 500;
            font-size: 18px;
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
    const [thirdHelper, setThirdHelper] = useRecoilState(thirdHelperState)
    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setThirdHelper((curr) => ({
            ...curr,
            contents: e.target.value,
            counts: e.target.value.length,
        }))
        if (thirdHelper.counts > 1) {
            setThirdHelper((curr) => ({
                ...curr,
                isFilled: true,
            }))
        } else {
            setThirdHelper((curr) => ({
                ...curr,
                isFilled: false,
            }))
        }
    }
    return (
        <Total>
            <Line2>
                <textarea
                    value={thirdHelper.contents}
                    onChange={onChangeContents}
                    placeholder="자기소개서 내용을 입력해주세요. "
                    required
                />
            </Line2>
        </Total>
    )
}

export default Third
