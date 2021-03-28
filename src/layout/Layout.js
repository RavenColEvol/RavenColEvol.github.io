import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
const Wrapper = styled.div`
    width:100%;
    max-width:120rem;
    margin:0 auto;
`
const Layout = ({children}) => {
    return (
        <Wrapper>
            <Navbar/>
            {children}
        </Wrapper>
    )
}

export default Layout;
