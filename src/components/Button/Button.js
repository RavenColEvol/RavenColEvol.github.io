import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
    display:inline-block; 
    text-transform:uppercase;
    font-weight:700;
    background:var(--color-primary-2);
    box-shadow:0 18px 24px -12px rgba(8, 152, 200,.3);
    border-radius:100px;
    transition:.25s all ease-in-out;
    padding:.8rem 2.5rem;
    color:white;
    font-size:.65rem;
    letter-spacing:.0.2rem;

    @media ${props=>props.theme.media.medium}{
        padding:.5rem 1.5rem;
        font-size:.6rem;
        letter-spacing:.1rem;
    }
    &:hover{
        background:var(--color-primary-3);
        box-shadow:0 18px 24px -12px rgba(8, 152, 200,.5);
        transform:translateY(-3px);
    }
`
const Button = ({children,href,target}) => {
    return (
        <StyledButton href={href} target={target?"_blank":''}>
            {children}
        </StyledButton>
    )
}

export default Button
