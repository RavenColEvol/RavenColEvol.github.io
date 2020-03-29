import React from 'react'
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import logo from './../../../static/images/logo.png'

const Name = styled.div`
    color:var(--color-primary-3);
    font-size:1rem;
    font-weight:600;
    text-transform:uppercase;
`

const Center = styled.div`
    text-align:center;
    margin-top:4rem;
`
const LogoImg = styled(Img)`
    height:70px;
    width:auto;
    margin-bottom:1rem;
`

const Copywright = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
                fixed(width: 100) {
                ...GatsbyImageSharpFixed
                }
            }
            }
        }
    `)

    return (
        <Center>
            <LogoImg fixed={data.logo.childImageSharp.fixed}/>
            <Name>Ravi Daleep Lamkoti</Name>
            
        </Center>
    )
}

export default Copywright
