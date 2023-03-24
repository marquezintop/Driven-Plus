import mainLogo from "../assets/logo.png"
import styled from "styled-components"
import React, { useContext } from "react"
import { StyledInput } from "../components/StyledComponents/StyledInput"
import { StyledButton } from "../components/StyledComponents/StyledButton"
import { StyledLink } from "../components/StyledComponents/StyledLink"
import { StyledForm } from "../components/StyledComponents/StyledForm"
import { useNavigate } from "react-router-dom"
import apiAuth from "../services/apiAuth"
import { useState } from "react"
import { UserContext } from "../contexts/UserContext"

export default function LoginPage() {
    const [form, setForm] = useState({email: "", password: ""})

    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    console.log(user)
    
    function handleLogin(e) {
        e.preventDefault()
        apiAuth.login(form)
            .then(res => {
                const {id, name, token} = res.data
                setUser(    {id, name, token}   )
                if (res.data.membership === null) {
                    return navigate("/subscriptions")
                }
                navigate("/home")
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }

   return (
    <Container>
        <img alt="mainLogo" src={mainLogo}></img>
        <StyledForm onSubmit={handleLogin}>
            <StyledInput
             placeholder="E-mail"
             name="email"
             type="email"
             required
             value={form.email} 
             onChange={handleForm}/>
            <StyledInput 
            placeholder="Senha" 
            name="password"
            type="password"
            required
            value={form.password}
            onChange={handleForm}/>
            <StyledButton type="submit">Entrar</StyledButton>
        </StyledForm>
        <StyledLink to="/sign-up">Não possuí uma conta? Cadastre-se</StyledLink>
    </Container>
   ) 
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 299px;
        height: 49px;
        margin-top: 134px;
        margin-bottom: 100px;
    }
`