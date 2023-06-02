import styled from 'styled-components'
import Block from './Block'
import {useRecoilState} from 'recoil'
import {secondHelperState} from '../recoil/helper'
import React, {useEffect} from 'react'

const Total = styled.div`
    p {
        width: 150px;
        font-weight: 600;
        font-size: 16px;
        color: #202123;
    }
    input {
        height: 40px;
        width: 90%;
        border: 0;
        background-color: #f4f5f7;
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
    textarea {
        resize: none;
        border: 0;
        background-color: #f4f5f7;
        width: 100%;
        margin-top: 15px;
        height: 35vh;
        font-size: 16px;
        line-height: 150%;
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

const Line = styled.div`
    display: flex;
    align-items: center;
    p {
        margin: 0;
    }
`

const Line2 = styled.div`
    display: flex;
    p {
        margin-top: 15px;
    }
`

function Second() {
    const [secondHelper, setSecondHelper] = useRecoilState(secondHelperState)

    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSecondHelper((curr) => ({
            ...curr,
            contents: e.target.value,
            counts: e.target.value.length,
        }))
    }

    const onChangeWork = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondHelper((curr) => ({
            ...curr,
            work: e.target.value,
        }))
    }

    const onChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondHelper((curr) => ({
            ...curr,
            question: e.target.value,
        }))
    }
    useEffect(() => {
        setSecondHelper((curr) => {
            const isFilled = curr.contents.length > 1 && curr.question.length > 1 && curr.work.length > 1

            if (curr.isFilled !== isFilled) {
                return {
                    ...curr,
                    isFilled,
                }
            }
            return curr
        })
    }, [secondHelper, setSecondHelper])
    return (
        <Total>
            <Line>
                <p>직무</p>
                <input
                    value={secondHelper.work}
                    onChange={onChangeWork}
                    placeholder="지원하는 직무 및 직군을 입력해주세요. (ex. 마케터)"
                    required
                />
            </Line>
            <Block />
            <Line>
                <p>질문</p>
                <input
                    value={secondHelper.question}
                    onChange={onChangeQuestion}
                    placeholder="자기소개서 문항을 입력해주세요. (ex. 협업 경험에 대해 서술하시오.)"
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
