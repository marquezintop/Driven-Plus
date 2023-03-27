import styled from "styled-components";
import leftArrow from "../assets/left-arrow.png"
import taskList from "../assets/task-list.png"
import billWave from "../assets/bill-wave.png"
import { StyledButton } from "../components/StyledComponents/StyledButton";
import { StyledForm } from "../components/StyledComponents/StyledForm";
import { StyledInput } from "../components/StyledComponents/StyledInput";
import SmallStyledInput from "../components/StyledComponents/SmallStyledInput"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import apiSubscriptions from "../services/apiSubscriptions";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useState } from "react";
import Modal from "../components/Modal";

export default function SubscriptionPlanPage() {
    const {membership_id} = useParams()

    const navigate = useNavigate();

    const [popUp, setPopUp] = useState(false)

    const { user, setUser } = useContext(UserContext)

    const [membershipChoosen, setMembershipChoosen] = useState([])

    const [perks, setPerks] = useState([])

    const [form, setForm] = useState({
        membershipId: membership_id,
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: ""
    })

    useEffect(getMempershipPlan, [])

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
        console.log(form)
    }

    function handleLeftArrow() {
        navigate("/subscriptions")
    }

    function getMempershipPlan() {
        apiSubscriptions.getMempershipChoosen(user.token, membership_id)
        .then(res => {
            setMembershipChoosen(res.data)
            setPerks(res.data.perks)
        })
        .catch(err => alert(err.response.data.message))
    }

    function handleMembership(e) {
        e.preventDefault()
        setPopUp(!popUp)
    }

    function signMembership() {
        apiSubscriptions.signSubscription(form, user.token)
        .then(res => {
            console.log(res.data)
            const {membership} = res.data
            setUser( {...user, membership}  )
            localStorage.setItem("user", JSON.stringify({...user, membership}))
            navigate("/home")
        })
        .catch(err => alert(err.response.data.message))
    }

    return (
        <>
        <Modal popUp={popUp} 
        setPopUp={setPopUp}
        membershipName={membershipChoosen.name}
        price={membershipChoosen.price}
        handleMembership={handleMembership}
        signMembership={signMembership}
        />
        <LeftArrowStyled src={leftArrow} alt={leftArrow} onClick={handleLeftArrow}/>
        <SubscriptionPlanPageStyled>
        <img src={membershipChoosen.image} alt={membershipChoosen.name}/>
        <span>{membershipChoosen.name}</span>
        <InformationMembershipStyled>
            <img className="taskList" src={taskList} /> Benefícios
            {perks.map((p, id) => (
                <>
                <p>{id + 1} {p.title}</p>
                </>
            ))}
            <img className="billWave" src={billWave} /> Preço
            <p>R$ {membershipChoosen.price} cobrados mensalmente</p>
        </InformationMembershipStyled>
        <StyledForm onSubmit={handleMembership}>
            <StyledInput placeholder="Nome impresso no cartão"
            name="cardName"
            type="name"
            required
            value={form.cardName} 
            onChange={handleForm}/>
            <StyledInput placeholder="Digitos do cartão"
            name="cardNumber"
            required
            value={form.cardNumber} 
            onChange={handleForm}/>
            <div className="smallInput">
            <SmallStyledInput placeholder="Código de segurança"
            name="securityNumber"
            type="number"
            required
            value={form.securityNumber} 
            onChange={handleForm}/>
            <SmallStyledInput placeholder="Validade"
            name="expirationDate"
            required
            value={form.expirationDate} 
            onChange={handleForm}/>
            </div>
            <StyledButton type="submit">Assinar</StyledButton>
        </StyledForm>
        </SubscriptionPlanPageStyled>
        </>
    )
}

const SubscriptionPlanPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
        margin-top: 12px;
        margin-left: 20px;
    }
    .smallInput {
        display: flex;
        input:nth-child(1) {
            margin-right: 9px;
        }
    }
`

const LeftArrowStyled = styled.img`
    height: 28px;
    width: 28px;
    margin: 22px;
    :hover {
        cursor: pointer;
    }
`

const InformationMembershipStyled = styled.div`
    margin: 22px 0;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    margin-right: 100px;
    .taskList {
        width: 20px;
        height: 20px;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF; 
        margin: 12px;
    }
    .billWave {
        width: 15px;
        height: 10.5px;
    }
`