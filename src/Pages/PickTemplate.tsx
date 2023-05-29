import Card from '../Components/Card'
import Header from '../Components/Header'
import {styled} from 'styled-components'

const Middle = styled.div`
    span {
        color: #7154e6;
        font-size: 30px;
        line-height: 150%;
    }
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 34px;
`

const Bold = styled.span`
    font-weight: 700;
`
const Normal = styled.span`
    font-weight: 500;
`

const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 68px;
`

const Blank = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    text-align: center;
    border-bottom: 5px solid #9980fc;
`
const CardBox = styled.div``

const Contents = styled.div`
    display: flex;
    align-items: center;
    height: calc(90vh - 90px);
`

const Words = styled.div``
function PickTemplate() {
    return (
        <>
            <Header />
            <Blank></Blank>
            <Contents>
                <Middle>
                    <Words>
                        <Bold>자소서 작성</Bold>
                        <Normal>의 시작과 끝,</Normal>
                        <br />
                        <Bold>요즘자소서</Bold>
                        <Normal>로 쉽고 간편하게.</Normal>
                    </Words>
                </Middle>
                <CardBox>
                    <Cards>
                        <Card
                            title="초안 작성 도우미"
                            detail="지원하는 회사와 직군, 그리고 과거에 했던 활동<br>한 줄만 입력하면 자기소개서 초안을 제안해줘요."
                            id={0}
                        />
                        <Card
                            title="내용 수정 도우미"
                            detail="자기소개서 내용에서 바뀔 부분은 없는지,<br> 더 추가되면 좋은 내용은 없는지 꼼꼼히 확인한 후<br> 어떻게 수정하면 좋을지 제안해줘요."
                            id={1}
                        />
                    </Cards>
                    <Cards>
                        <Card
                            title="문장 가독성 도우미"
                            detail="자기소개서 문장들을 분석한 후, <br>더 깔끔하고 명확한 문장을 제안해줘요."
                            id={2}
                        />
                        <Card
                            title="면접 질문 생성 도우미"
                            detail="각자의 자기소개서에 맞춰<br> 예상 면접 질문을 뽑아줘요."
                            id={3}
                        />
                    </Cards>
                </CardBox>
            </Contents>
        </>
    )
}

export default PickTemplate
