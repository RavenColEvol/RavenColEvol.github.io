import React from 'react'
import styled from 'styled-components';
import logo from './../../../static/images/logo.png'

const Name = styled.div`
    color:var(--color-primary-3);
    font-size:1rem;
    font-weight:600;
    text-transform:uppercase;
`

const Center = styled.div`
    text-align:center;
    margin-top:4rem;
`
const LogoImg = styled.img`
    height:70px;
    width:auto;
    margin-bottom:1rem;
`

const Copywright = () => {
    return (
        <Center>
            <LogoImg src={logo}/>
            <Name>Ravi Daleep Lamkoti</Name>
            
        </Center>
    )
}

export default Copywright
