import React from 'react'
import styled from 'styled-components';
import SocialMediaIcon from './SocialMediaIcon/SocialMediaIcon'


const NavIcons = styled.nav`
    display:flex;
    justify-content:center;
`
const P = styled.p`
    margin-top:6rem;
    margin-bottom:1.6rem;
    color:var(--color-white-2);
    font-size:1rem;
    font-weight:600;
    text-align:center;
`
const SocialMediaIcons = () => {
    return (
        <>
        <P>ravilamkoti@gmail.com</P>
        <NavIcons>
            <SocialMediaIcon href='https://github.com/RavenColEvol' icon="icon-github"/>
            <SocialMediaIcon href='https://in.linkedin.com/in/ravi-lamkoti-370285169' icon="icon-linkedin2"/>
            <SocialMediaIcon href='' icon="icon-google-plus"/>
            <SocialMediaIcon href='https://www.instagram.com/nontoxic_raven' icon="icon-instagram"/>
        </NavIcons>
        </>
    )
}

export default SocialMediaIcons
