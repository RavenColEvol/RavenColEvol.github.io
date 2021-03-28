import React from 'react'
import NavItem from './NavItem/NavItem';
import styled from 'styled-components';

const NavItemsWrapper = styled.div`
    display:flex;
    align-items:center;
    height:100%;
    @media ${props=>props.theme.media.medium}{
        justify-content:center;
        flex-direction:column;
    }
`

const NavItems = ({clicked}) => {
    return (
        <NavItemsWrapper>
            <NavItem click={clicked} to="#about">About Me</NavItem>
            <NavItem click={clicked} to="#portfolio">Portfolio</NavItem>
            <NavItem click={clicked} to="#certifications">certifications</NavItem>
            <NavItem click={clicked} to="#contact">contact</NavItem>            
        </NavItemsWrapper>
    )
}

export default NavItems
