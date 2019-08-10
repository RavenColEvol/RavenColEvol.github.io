import React from 'react'
import styled from 'styled-components';
import Skew from './../../../components/textUtil/Skew/Skew'

const CertificateWrapper = styled.div`
    text-align:center;
    margin:1.5rem 0;
`
const Img = styled.img`
    width:350px;
    height:auto;
    @media ${props=>props.theme.media.medium}
    {
        width:230px;
    }
    @media ${props=>props.theme.media.small}
    {
        width:280px;
    }
    box-shadow:0 1rem 3rem rgba(0,0,0,.35);
    margin-bottom:1.4rem;
`


const Certificate = ({src,title}) => {
    return (
        <CertificateWrapper>
            <Img src={src}></Img><br/>
            <Skew>{title}</Skew>
        </CertificateWrapper>
    )
}

export default Certificate
