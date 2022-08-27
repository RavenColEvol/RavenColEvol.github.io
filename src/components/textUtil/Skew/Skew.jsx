import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    display:inline-block;
    font-size:1.2rem;
    font-weight:600;
    position:relative;
    color: ${props => props.theme.currTheme === 'light' ? 'var(--color-dark-1)' : 'var(--color-white-1)'};
    @media ${props=>props.theme.media.small}
    {
        font-size:.8rem;
    }
    @media ${props=>props.theme.media.medium}
    {
        font-size:1rem;
    }
    &:after{
        content:'';
        position:absolute;
        top:50%;
        left:0;
        height:100%;
        width:100%;
        z-index:-1;
        transform:rotateZ(-3deg) translateY(-50%);
        background:var(--color-primary-1);
    }
`

const Skew = ({children}) => {
    return (
        <P>{children}</P>
    )
}

export default Skew
