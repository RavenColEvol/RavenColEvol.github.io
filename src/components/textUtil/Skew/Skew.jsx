import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    display:inline-block;
    font-size:1.2rem;
    font-weight:600;
    position:relative;

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
        top:0;
        left:0;
        height:100%;
        width:100%;
        z-index:-1;
        transform:rotateZ(-3deg);
        background:var(--color-primary-1);
    }
`

const Skew = ({children}) => {
    return (
        <P>{children}</P>
    )
}

export default Skew
