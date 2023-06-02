import styled from 'styled-components'

const Total = styled.div`
    height: 125px;
    display: flex;
    justify-content: space-between;
    background: #202123;
    align-items: center;
    p {
        color: rgba(217, 217, 217, 0.68);
        font-weight: 500;
        font-size: 22px;
        margin-left: 150px;
        margin-right: 150px;
    }
`
function Footer() {
    return (
        <Total>
            <p>@2023. Generative Lab. ALL RIGHTS RESERVED.</p>
            <p>E-mail : thesedays.ai@gmail.com</p>
        </Total>
    )
}

export default Footer
