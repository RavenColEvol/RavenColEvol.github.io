import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Container from './../../components/Container/Container'
import Title from './../../components/textUtil/Title/Title'
import styled from 'styled-components'
import Certificate from './Certificate/Certificate'

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

    const data = useStaticQuery(graphql`
        query {
            js: file(relativePath: { eq: "js.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            responsive: file(relativePath: { eq: "responsive.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            frontend: file(relativePath: { eq: "frontendlibraries.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        } 
    `)

    return (
        <div id="certifications">
        <Container>
            <Title>Certifications</Title>
            <Certificates>
                <Certificate src={data.responsive.childImageSharp.fluid} title="Responsive Web Design"/>
                <Certificate src={data.js.childImageSharp.fluid} title="JavaScript and Data Structures"/>
                <Certificate src={data.frontend.childImageSharp.fluid} title="Front-End Libraries"/>
            </Certificates>
        </Container>
        </div>
    )
}

export default Certifications
