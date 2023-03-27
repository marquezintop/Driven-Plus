import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import userCircle from "../assets/user-circle.png"
import { UserContext } from "../contexts/UserContext"
import apiSubscriptions from "../services/apiSubscriptions"

export default function HomePage() {
    const navigate = useNavigate()

    const { user } = useContext(UserContext)
    console.log(user)

    function changeSubscription() {
        navigate("/subscriptions")
    }

    function cancelSubscription() {
        apiSubscriptions.cancelSubscription(user.token)
        .then(res => navigate("/subscriptions"))
        .catch(err => alert(err.response.data.message))
    }

    return (
        <Container>
            <DrivenLogo src={user.membership.image} />
            <UserCircle src={userCircle} />
            <h1>Olá, {user.name}</h1>
            {user.membership.perks.map(p => (
                <ButtonPerks href={p.link}>{p.title}</ButtonPerks>
            ))}
            <ChangeButton onClick={changeSubscription}>Mudar plano</ChangeButton>
            <CancelButton onClick={cancelSubscription}>Cancelar plano</CancelButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 100px;
        margin-bottom: 50px;
    }
`

const DrivenLogo = styled.img`
    width: 80px;
    position: absolute;
    left: 8%;
    right: 0.12%;
    top: 2%;
    bottom: 0%;
`

const UserCircle = styled.img`
    width: 34px;
    position: absolute;
    left: 85%;
    right: 0%;
    top: 1.56%;
    bottom: 1.56%;
`

const ButtonPerks = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 298px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border: none;
    margin-bottom: 12px;
    text-decoration: none;
`

const ChangeButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 298px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border: none;
    position: absolute;
    transform:translateX(-50%);
    left: 50%;
    top: 543px;
    :hover {
        cursor: pointer;
}`

const CancelButton = styled(ChangeButton)`
    top: 600px;
    background: #FF4747;
`