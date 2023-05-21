import styled from 'styled-components'
import Block from './Block'
import {useRecoilState} from 'recoil'
import {firstHelperState} from '../recoil/helper'
import {useEffect} from 'react'

const Total = styled.div`
    p {
        width: 150px;
        font-weight: 600;
        font-size: 18px;
        color: #202123;
    }
    input {
        height: 40px;
        width: 90%;
        border: 0;
        background-color: #f4f5f7;
        font-size: 18px;
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
        width: 90%;
        margin-top: 15px;
        font-size: 18px;
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
`

const Line2 = styled.div`
    display: flex;
`

function First() {
    const [helper, setHelper] = useRecoilState(firstHelperState)
    const onChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHelper((curr) => ({
            ...curr,
            company: e.target.value,
        }))
    }
    const onChangeWork = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHelper((curr) => ({
            ...curr,
            work: e.target.value,
        }))
    }

    const onChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHelper((curr) => ({
            ...curr,
            question: e.target.value,
        }))
    }
    const onChangeExperience = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHelper((curr) => ({
            ...curr,
            experience: e.target.value,
        }))
    }
    useEffect(() => {
        setHelper((curr) => {
            const isFilled =
                curr.company.length > 1 &&
                curr.experience.length > 1 &&
                curr.question.length > 1 &&
                curr.work.length > 1

            if (curr.isFilled !== isFilled) {
                return {
                    ...curr,
                    isFilled,
                }
            }

            return curr
        })
    }, [helper])

    return (
        <Total>
            <Line>
                <p>지원 회사</p>
                <input
                    value={helper.company}
                    onChange={onChangeCompany}
                    placeholder="지원하는 회사명을 입력해주세요. (ex. 현대자동차)"
                    required
                />
            </Line>
            <Block />
            <Line>
                <p>직무</p>
                <input
                    value={helper.work}
                    onChange={onChangeWork}
                    placeholder="지원하는 직무 및 직군을 입력해주세요. (ex. 마케터)"
                    required
                />
            </Line>
            <Block />
            <Line>
                <p>질문</p>
                <input
                    value={helper.question}
                    onChange={onChangeQuestion}
                    placeholder="자기소개서 문항을 입력해주세요. (ex. 협업 경험에 대해 서술하시오.)"
                    required
                />
            </Line>
            <Block />
            <Line2>
                <p>활동 경험</p>
                <textarea
                    value={helper.experience}
                    onChange={onChangeExperience}
                    placeholder="활동 경험을 작성해주세요.(ex. ABC 프로젝트 마케터로 유저 유입 30% 증가) "
                    required
                />
            </Line2>
        </Total>
    )
}

export default First
