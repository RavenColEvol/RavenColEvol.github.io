import React from 'react'
import Container from './../../components/Container/Container'
import Title from './../../components/textUtil/Title/Title'
import BoldItalic from './../../components/textUtil/BoldItalic/BoldItalic'
import styled from 'styled-components'
import SocialMediIcons from './SocialMediaIcons/SocialMediaIcons';
import Copywright from './Copywright/Copywright';

const P = styled.p`
    margin:.2rem 0;
    text-align:center;
    font-size:1.1rem;
    font-weight:300;

    @media ${props=>props.theme.media.medium}
    {
        font-size:1rem;
    }
`
const Contact = () => {
    return (
        <div id="contact">
            <Container >
                <Title>Contact me</Title>
                <P >If you want to <BoldItalic>talk</BoldItalic>, you can <BoldItalic>find</BoldItalic> me at :</P>

                <SocialMediIcons/>
                <Copywright/>
            </Container>
        </div>
    )
}

export default Contact