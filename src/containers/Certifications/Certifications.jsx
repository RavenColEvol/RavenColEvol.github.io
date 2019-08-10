import React from 'react'
import Container from './../../components/Container/Container'
import Title from './../../components/textUtil/Title/Title'
import styled from 'styled-components'
import Certificate from './Certificate/Certificate'
import responsive from '../../assest/certificates/responsive.png'
import js from '../../assest/certificates/js.png'
import frontendlibraries from '../../assest/certificates/frontendlibraries.png'

const Certificates = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    min-height:80vh;
    @media ${props=>props.theme.media.small}
    {
        margin-top:4rem;
        flex-direction:column;
    }
`

const Certifications = () => {
    return (
        <div id="certifications">
        <Container>
            <Title>Certifications</Title>
            <Certificates>
                <Certificate src={responsive} title="Responsive Web Design"/>
                <Certificate src={js} title="JavaScript and Data Structures"/>
                <Certificate src={frontendlibraries} title="Front-End Libraries"/>
            </Certificates>
        </Container>
        </div>
    )
}

export default Certifications
