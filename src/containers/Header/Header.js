import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent/HeaderContent'

const HeaderWrapper = styled.div`
    margin-top:4rem;
    min-height:80vh;
    width:100vw;
    display:flex;
    align-items:center;
    color:white;
`
const Header = () => {
    return (
        <div id="header">
            <HeaderWrapper>
                <HeaderContent/>
            </HeaderWrapper>
        </div>
    )
}

export default Header
