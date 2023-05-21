import styled from 'styled-components'
import Block from './Block'
import {useRecoilState} from 'recoil'
import {secondHelperState} from '../recoil/helper'

const Total = styled.div`
    input {
        height: 40px;
        width: 100%;
        border: 0;
        background-color: #f4f5f7;
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
    textarea {
        resize: none;
        border: 0;
        background-color: #f4f5f7;
        width: 100%;
        margin-top: 15px;
        height: 33vh;
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

const Line = styled.div`
    display: flex;
    align-items: center;
`

const Line2 = styled.div`
    display: flex;
`

function Second() {
    const [secondHelper, setSecondHelper] = useRecoilState(secondHelperState)

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondHelper((curr) => ({
            ...curr,
            title: e.target.value,
        }))
        if (secondHelper.title.length > 1 && secondHelper.contents.length > 1) {
            setSecondHelper((curr) => ({
                ...curr,
                isFilled: true,
            }))
        } else {
            setSecondHelper((curr) => ({
                ...curr,
                isFilled: false,
            }))
        }
    }
    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSecondHelper((curr) => ({
            ...curr,
            contents: e.target.value,
            counts: e.target.value.length,
        }))
        if (secondHelper.title.length > 1 && secondHelper.contents.length > 1) {
            setSecondHelper((curr) => ({
                ...curr,
                isFilled: true,
            }))
        } else {
            setSecondHelper((curr) => ({
                ...curr,
                isFilled: false,
            }))
        }
    }
    return (
        <Total>
            <Line>
                <input
                    value={secondHelper.title}
                    onChange={onChangeTitle}
                    placeholder="제목을 입력해주세요."
                    required
                />
            </Line>
            <Block />
            <Line2>
                <textarea
                    value={secondHelper.contents}
                    onChange={onChangeContents}
                    placeholder="자기소개서 내용을 입력해주세요. "
                    required
                />
            </Line2>
        </Total>
    )
}

export default Second
