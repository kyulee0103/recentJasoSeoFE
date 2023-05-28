import {useRecoilState} from 'recoil'
import styled from 'styled-components'
import {thirdHelperState} from '../recoil/helper'
import {useEffect} from 'react'

const Total = styled.div`
    textarea {
        resize: none;
        border: 0;
        background-color: #f4f5f7;
        width: 100%;
        margin-top: 8px;
        height: 50vh;
        font-size: 16px;
        &::placeholder {
            color: #8f98a9;
            font-weight: 500;
            font-size: 16px;
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
    }

    useEffect(() => {
        setThirdHelper((curr) => {
            const isFilled = curr.contents.length > 1
            if (curr.isFilled !== isFilled) {
                return {
                    ...curr,
                    isFilled,
                }
            }
            return curr
        })
    }, [thirdHelper, setThirdHelper])
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
