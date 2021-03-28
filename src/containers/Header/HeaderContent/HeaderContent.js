import React from 'react'
import styled from 'styled-components';
import Marked from '../../../components/textUtil/Marked/Marked';
import BoldItalic from '../../../components/textUtil/BoldItalic/BoldItalic';
import Button from '../../../components/Button/Button';

const ContentWrapper = styled.div`
    padding-left:10rem;
    h1{
        font-weight:200;
        font-size:4rem;
        margin-bottom:.8rem;
        animation:slideRight .2s ease-in;
    }
    h3{
        font-size:1.2rem;
        font-weight:200;
        margin-bottom:calc(1.6rem*2);
        opacity:0;
        animation:slideUp .2s .2s ease-in ;
        animation-fill-mode:forwards;
    }
    @media ${props=>props.theme.media.medium}
    {
        padding-left:2rem;
        h1{
            font-weight:200;
            font-size:2rem;
            margin-bottom:.8rem;
            
        }
        h3{
            font-size:.9rem;
            font-weight:200;
            margin-bottom:calc(1.6rem*2);
        }
    }
    transform:translateX(0);
    

    @keyframes slideRight{
        from{
            transform:translateX(-30px);
            opacity:0;
        }
        to{
            transform:translateX(0);
            opacity:1;
        }
    }
    @keyframes slideUp{
        from{
            transform:translateY(30px);
            opacity:0;
        }
        to{
            transform:translateX(0);
            opacity:1;
        }
    }
`
const HeaderContent = () => {
    return (
        <ContentWrapper>
            <h1>Hello,<br/> I'm <Marked>Ravi Lamkoti</Marked></h1>
            <h3>A <BoldItalic>passionate</BoldItalic> Full-Stack developer</h3>
            <Button href="#about">About Me</Button>
        </ContentWrapper>
    )
}

export default HeaderContent
