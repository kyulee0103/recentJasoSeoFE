import Card from '../Components/Card'
import Header from '../Components/Header'
import {styled} from 'styled-components'

const Middle = styled.div`
    span {
        color: #202123;
        font-size: 36px;
    }
    text-align: center;
    margin-bottom: 74px;
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
    margin-bottom: 64px;
    margin-left: 74px;
    margin-right: 74px;
`
function PickTemplate() {
    return (
        <>
            <Header />
            <Middle>
                <Bold>자소서 첨삭</Bold>
                <Normal>의 시작과 끝, 이젠 </Normal>
                <Bold>AI</Bold>
                <Normal>로 쉽고 간편하게.</Normal>
            </Middle>
            <Cards>
                <Card
                    title="초안 작성 도우미"
                    detail="지원하는 회사와 직군, 그리고 과거에 했던 활동 한 줄만 입력하면 <br> 자기소개서 초안을 제안해줘요."
                />
                <Card
                    title="내용 수정 도우미"
                    detail="자기소개서 내용에서 바뀔 부분은 없는지, 더 추가되면 좋은 내용은 없는지<br>꼼꼼히 확인한 후 어떻게 수정하면 좋을지 제안해줘요."
                />
            </Cards>
            <Cards>
                <Card
                    title="문장 가독성 도우미"
                    detail="자기소개서 문장들을 분석한 후, <br>더 깔끔하고 명확한 문장을 제안해줘요."
                />
                <Card title="면접 질문 생성 도우미" detail="각자의 자기소개서에 맞춰 예상 면접 질문을 뽑아줘요." />
            </Cards>
        </>
    )
}

export default PickTemplate
