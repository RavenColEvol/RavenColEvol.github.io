import React from 'react'
import styled from 'styled-components'
import MoonIcon from './../../../../components/Icon/Icon';

const Icon = styled.a`
    display:inline-block;
    width:40px;
    height:40px;
    border-radius:50%;
    margin:0 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid var(--color-primary-3);
    color: var(--color-white-1);
    padding:10px;
    transition:.25s all cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @media ${props=>props.theme.media.medium}
    {
        margin:0 .5rem;
    }
    &:hover{
        ${props => {
            const { currTheme } = props.theme;
            const isLight = currTheme === 'light';
            if(isLight) return `
                color:var(--color-dark-1);
                background:var(--color-primary-2);
            `
            return `
                color:var(--color-primary-2);
                background:var(--color-white-1);
            `
        }}
        cursor:pointer;
    }

    .icon {
        max-height: 100%;
    }
`

const SocialMediaIcon = ({icon,href}) => {
    return (
        <Icon href={href} target="_blank">
            <MoonIcon icon={icon} className={`icon ${icon}`} />
        </Icon>
    )
}

export default SocialMediaIcon
