import styled from "styled-components"
import { StyledInput } from "../components/StyledComponents/StyledInput"
import { StyledButton } from "../components/StyledComponents/StyledButton"
import { StyledLink } from "../components/StyledComponents/StyledLink"
import { StyledForm } from "../components/StyledComponents/StyledForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import apiAuth from "../services/apiAuth"

export default function SignUpPage() {
    const navigate = useNavigate()
    
    const [form, setForm] = useState({
        email: "",
        name: "",
        cpf: "",
        password: ""
    })

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    function handleSignUp(e) {
        e.preventDefault()
        apiAuth.signUp(form)
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    return (
        <Container>
            <StyledForm onSubmit={handleSignUp}>
            <StyledInput placeholder="Nome" 
            name="name"
            type="name"
            required
            value={form.name} 
            onChange={handleForm}/>
            <StyledInput placeholder="CPF" 
            name="cpf"
            type="number"
            required
            value={form.cpf} 
            onChange={handleForm}/>
            <StyledInput placeholder="E-mail" 
            name="email"
            type="email"
            required
            value={form.email} 
            onChange={handleForm}/>
            <StyledInput placeholder="Senha" 
            name="password"
            type="password"
            required
            value={form.password} 
            onChange={handleForm}/>
            <StyledButton type="submit">Cadastrar</StyledButton>
            </StyledForm>
            <StyledLink to="/">Já possuí uma conta? Entre</StyledLink>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 147px;
`