import styled from 'styled-components'
import Before from '../../assets/beforeArrow.png'
import After from '../../assets/afterArrow.png'
import {useState} from 'react'

type PriceCardProps = {
    priceChanged: boolean
    name: string
    detail: string
    price: string
    beforePrice?: string
    buttonText: string
}

const Total = styled.div`
    width: 342.23px;
    height: 444.72px;
    background: #ffffff;
    box-shadow: 13px 13px 30px 2.54128px rgba(145, 133, 253, 0.4);
    border-radius: 8.47095px;
    display: flex;
    flex-direction: column;
    margin: 30px;
    position: relative;
    transition: all 0.5s ease;
    &:hover {
        transition: all 0.5s ease;
        background: linear-gradient(358.42deg, #508fee -3.99%, #2e10a7 -3.98%, #181059 111.84%);
        button {
            background: #9980fc;
            color: white;
        }
        p {
            color: white;
        }
        span {
            color: white;
        }
    }
`
const Title = styled.p`
    margin-top: 33px;
    margin-left: 28px;
    color: #392855;
    font-weight: 600;
    font-size: 18px;
`

const PriceTag = styled.p`
    color: #392855;
    font-weight: 700;
    font-size: 32px;
    margin-left: 28px;
    margin-top: 0;
    margin-bottom: 4px;
`

const Detail = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #777777;
    opacity: 0.8;
    margin-left: 28px;
`
const Btn = styled.button`
    position: absolute;
    background: #ffffff;
    border: 1.69419px solid #9980fc;
    border-radius: 6.77676px;
    height: 51.67px;
    color: #9980fc;
    font-weight: 700;
    font-size: 20px;
    width: 252.43px;
    bottom: 28px;
    left: 44.8px;
    cursor: pointer;
`

const PriceBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    span {
        color: #51426a;
        opacity: 0.6;
        font-weight: 500;
        font-size: 24px;
        margin-left: 30px;
    }
    img {
        width: 78px;
        position: absolute;
        left: 30px;
    }
`

const PriceCard: React.FC<PriceCardProps> = ({priceChanged, name, detail, price, beforePrice, buttonText}) => {
    const [hovered, setHovered] = useState(false)
    return (
        <>
            <Total onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <Title>{name}</Title>
                {priceChanged ? (
                    <PriceBox>
                        <span>{beforePrice}</span>
                        <img src={hovered ? After : Before} alt="arrow" />
                        <PriceTag>₩ {price}</PriceTag>
                    </PriceBox>
                ) : (
                    <PriceTag>₩ {price}</PriceTag>
                )}
                <Detail dangerouslySetInnerHTML={{__html: detail}} />
                <Btn>{buttonText}</Btn>
            </Total>
        </>
    )
}

export default PriceCard
