import React from 'react'
import Header from '../../Components/Header';
import SignUpForm from './SignUpForm';
import styled from 'styled-components' 

export const Container = styled.div`
    margin: 1rem;
`
export default function SignUpPage() {

    return (
        <Container>
            <Header />

            <SignUpForm 
            texto={"Cadastrar"}
            />

        </Container>
    )
}