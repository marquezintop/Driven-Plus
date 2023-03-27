import styled from "styled-components";
import windowClose from "../assets/window-close.png"

export default function Modal({popUp, setPopUp, membershipName, price, handleMembership, signMembership}) {



    return (
        <ModalStyled popUp={popUp}>
            <img src={windowClose} onClick={handleMembership}/>
            <div className="container">
                <span>Tem certeza que deseja assinar o plano {membershipName} (R$ {price})?</span>
                <div>
                    <ButtonNo onClick={handleMembership}>Não</ButtonNo>
                    <ButtonYes onClick={signMembership}>Sim</ButtonYes>
                </div>
            </div>
        </ModalStyled>
    )
}

const ModalStyled = styled.div`
    width: 375px;
    height: 760px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    position: absolute;
    visibility: ${props => props.popUp ? "visible" : "hidden"};
    img {
        margin-left: 327px;
        margin-top: 24px;
        width: 28px;
        height: 28px;
        :hover {
        cursor: pointer;
    }
    }
    .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 248px;
    height: 210px;
    left: 64px;
    top: 229px;
    background: #FFFFFF;
    border-radius: 12px;
    span {
    margin: 35px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #000000;
    }
    div {
        display: flex;
        justify-content: space-around;
    }
    }
`

const ButtonNo = styled.button`
    width: 95px;
    height: 52px;
    background: #CECECE;
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    border: none;
    display: inline-block;
    :hover {
        cursor: pointer;
    }
`

const ButtonYes = styled(ButtonNo)`
background: #FF4791
`