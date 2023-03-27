import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MembershipCard({img, alt, price, id, handleMembership}) {
    const navigate = useNavigate()

    return (
        <MembershipCardStyled onClick={handleMembership}>
            <img src={img} alt={alt} id={id}/>
            <span>R$ {price}</span>
        </MembershipCardStyled>
    )
}

const MembershipCardStyled = styled.div`
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    :hover {
        cursor: pointer;
    }
    img {
        margin: 42px 16px;
    }
    span {
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
    }
`