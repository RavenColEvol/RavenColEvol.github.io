import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position:fixed;
    top:4rem;
    left:0;
    bottom:0
    opacity:0;
    background:var(--color-dark-1);
    z-index:7;
    height:calc(100vh-4rem);
    width:100%;
    transition:.25s all cubic-bezier(.16,.37,.52,1.33);
    &.show{
        transform:translateX(0);
        opacity:1;
    }

    &.hide{
        transform:translateX(100%);
        opacity:0;
    }
`

const SideDrawer = ({isOpen,children}) => {
    return (
        <Wrapper className={isOpen?"show":"hide"}>
            {children}
        </Wrapper>
    )
}

export default SideDrawer
