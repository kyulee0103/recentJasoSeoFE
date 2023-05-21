import {useNavigate} from 'react-router-dom'
import {useSetRecoilState} from 'recoil'
import {styled} from 'styled-components'
import {helperState} from '../recoil/helper'

const Spot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #ccc0fd;
    margin-left: 3px;
`

const Total = styled.div`
    margin: 15px;
    width: 30vw;
    height: 300px;
    background: #ffffff;
    box-shadow: 7px 6px 17px -2px #e3ddfc;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in;
    &:hover {
        background: linear-gradient(180deg, #b8a7ff 0%, rgba(234, 228, 255, 0) 100%);
        box-shadow: 7px 6px 17px -6px #dad1ff;
        transition: all 0.5s ease-in;
        p {
            color: #202123;
        }
        & ${Spot} {
            background: #7d5cff;
        }
    }
`
const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: rgba(32, 33, 35, 0.61);
    display: flex;
    margin-top: 30px;
    margin-left: 25px;
    p {
        margin-top: 0;
        margin-bottom: 17px;
    }
`
const Detail = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    color: rgba(32, 33, 35, 0.61);
    margin-left: 25px;
`

type CardProps = {
    title: string
    detail: string
    id: number
}
const Card: React.FC<CardProps> = ({title, detail, id}) => {
    const navigate = useNavigate()
    const setHelperData = useSetRecoilState(helperState)
    const clickCard = (id: number, title: string) => {
        console.log(id)
        setHelperData((currVal) => ({
            ...currVal,
            id,
            name: title,
            isFilled: false,
        }))
        localStorage.setItem('page', id.toString())
        navigate('/helper')
    }
    return (
        <Total onClick={() => clickCard(id, title)}>
            <Title>
                <p>{title}</p>
                <Spot></Spot>
            </Title>

            <Detail dangerouslySetInnerHTML={{__html: detail}} />
        </Total>
    )
}
export default Card
