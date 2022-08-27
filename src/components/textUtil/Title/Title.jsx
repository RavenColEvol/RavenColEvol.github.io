import React from 'react'
import styled from 'styled-components'

const TitleText = styled.h2`
    font-size:1.5rem;
    color: var(--color-primary-2);
    text-align:center;
    text-transform:uppercase;
    letter-spacing:1px;

    @media ${props=>props.theme.media.medium}
    {
        font-size:1.3rem;
    }
`

const Title = ({children}) => {
    return (
        <TitleText>
            {children}
        </TitleText>
    )
}

export default Title
