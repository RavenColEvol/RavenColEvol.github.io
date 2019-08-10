import React from 'react'
import styled from 'styled-components'

const MarkedSpan = styled.span`
    font-weight:600;
    color:var(--color-primary-3);
`
const Marked = ({children}) => {
    return (
        <MarkedSpan>
            {children}
        </MarkedSpan>
    )
}

export default Marked
