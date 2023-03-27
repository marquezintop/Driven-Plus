import styled from "styled-components"
import apiSubscriptions from "../services/apiSubscriptions"
import MembershipCard from "../components/MembershipCard"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SubscriptionsPage() {
    const [membershipList, setMembershipList] = useState([])

    const { user } = useContext(UserContext)

    useEffect(getMembershipList, [])

    const navigate = useNavigate()

    function handleMembership(id) {
        navigate(`/subscriptions/${id}`)
    }

    function getMembershipList() {
        apiSubscriptions.getMemberships(user.token)
        .then(res => {
            setMembershipList(res.data)
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    return (
       <Container>
        <p>Escolha seu Plano</p>
        {membershipList.map(p => (
            <MembershipCard handleMembership={() => handleMembership(p.id)} 
            img={p.image} 
            alt={p.image} 
            price={p.price} 
            id={p.id}/>
        ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
        margin: 25px 0;
    }
`