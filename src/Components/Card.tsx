import {styled} from 'styled-components'

const Spot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #7092fd;
    margin-left: 3px;
`

const Total = styled.div`
    width: 47%;
    height: 259px;
    background: #ffffff;
    box-shadow: 6px 11px 23px rgba(204, 209, 221, 0.5);
    padding-top: 33px;
    padding-left: 36px;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
        background: #202123;
        box-shadow: 9px 12px 23px rgba(204, 209, 221, 0.8);
        p {
            color: #f4f5f7;
        }
        & ${Spot} {
            background: #9980fc;
        }
    }
`
const Title = styled.div`
    font-weight: 700;
    font-size: 28px;
    color: #202123;
    display: flex;
    p {
        margin-top: 0;
        margin-bottom: 59px;
    }
`
const Detail = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 140%;
    color: #202123;
`

type CardProps = {
    title: string
    detail: string
}
const Card: React.FC<CardProps> = ({title, detail}) => {
    return (
        <Total>
            <Title>
                <p>{title}</p>
                <Spot></Spot>
            </Title>

            <Detail dangerouslySetInnerHTML={{__html: detail}} />
        </Total>
    )
}
export default Card
