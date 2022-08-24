import React from 'react'
import styled from 'styled-components';
import SocialMediaIcon from './SocialMediaIcon/SocialMediaIcon'


const NavIcons = styled.nav`
    display:flex;
    justify-content:center;
`
const P = styled.p`
    margin-top:6rem;
    margin-bottom:1.6rem;
    color:var(--color-white-2);
    font-size:1rem;
    font-weight:600;
    text-align:center;
`
const SocialMediaIcons = () => {
    const socialMediaIcons = [
        { icon: 'icon-github', href: 'https://github.com/RavenColEvol'},
        { icon:"icon-linkedin2", href:'https://in.linkedin.com/in/ravi-lamkoti-370285169'},
        { icon: "icon-google-plus", href: 'https://www.codechef.com/users/lamkoti' },
        { icon: "icon-instagram", href: 'https://www.instagram.com/nontoxic_raven'},
    ]

    return (
        <>
            <P>ravilamkoti@gmail.com</P>
            <NavIcons>
                { 
                    socialMediaIcons.map(
                        sm => <SocialMediaIcon href={sm.href} icon={sm.icon} />
                    )
                }
            </NavIcons>
        </>
    )
}

export default SocialMediaIcons
