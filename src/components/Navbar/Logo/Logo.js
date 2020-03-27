import React from 'react'
import styled from 'styled-components'
import logo from '../../../static/images/logo.png'
const LogoWrapper = styled.img`
    height:45px;
    width:auto;
    opacity:.8;
`

const Logo = () => {
    return (
        <LogoWrapper src={logo}/>
    )
}

export default Logo
