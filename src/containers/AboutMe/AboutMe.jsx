import React from 'react'
import styled from 'styled-components';
import Container from './../../components/Container/Container'
import Title from './../../components/textUtil/Title/Title'
import Marked from './../../components/textUtil/Marked/Marked'
import Skew from './../../components/textUtil/Skew/Skew'

const Para = styled.div`
    margin:2rem 16rem;
    text-align:center;
    font-size:1rem;
    color:var(--color-white-2);

    @media ${props=>props.theme.media.medium}
    {
        margin:1rem 2rem;
        font-size:.8rem;

    }
`
const AboutMe = () => {
    return (
        <div id="about">
            <Container>
                <Title>About me</Title>
                <div style={{marginBottom:'3rem'}}></div>
                <Para>
                    My actual programming journey started in <Skew>class XI</Skew> when we had <Skew>C.P.P</Skew>  in our course and from that moment onwards
                    my interest in programming rose. I learnt basic algorithms and data structure . 
                </Para>
                <Para>
                    Then I started doing Web development from <Skew>Solo learn</Skew> and it was fun to gather free online certificates, it kind of gives a feeling of achievement.
                    After that I started doing follow along CSS animations video and it was <Marked>fascinating</Marked> for me when the my code made something to move on screen.
                </Para>
                <Para>
                    I also did some <Skew>Udemy</Skew> courses on <Marked>Front End Development</Marked>. I now have almost 2+ years of experience in Web development .
                    JavaScript became my favorite programming language .
                    But for competitive programming I've chosen Cpp because I wanted to have good grasp on OOPs and coding data structure by self.
                    As JavaScript can't be considered as a truely OOP language right now.
                </Para>
                <Para>
                    Technologies I'm comfortable with.<br/><br/>
                    <Marked>
                        React.js - Django - Node.js - Mongodb - Djangorestframework - Styled Components - Git - C/C++ - Docker - Bash - JavaScript
                    </Marked>
                </Para>
            </Container>
        </div>
    )
}

export default AboutMe
