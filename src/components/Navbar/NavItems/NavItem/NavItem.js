import React from 'react'
import styled from 'styled-components';

const StyledLink = styled.a`
    font-size:.7rem;
    display:inline-block;
    text-transform:uppercase;
    font-weight:700;
    padding:.5rem 1.3rem;
    color:var(--color-white-2);
    transition:.25s all ease-out;
    &:hover{
        color:var(--color-primary-2);
    }
    
`
const NavItem = ({children,to,click}) => {
    return (
        <StyledLink onClick={click} href={to}>
            {children}
        </StyledLink>
    )
}

export default NavItem
