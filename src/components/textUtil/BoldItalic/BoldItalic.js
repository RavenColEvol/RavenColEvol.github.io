import React from 'react'
import styled from 'styled-components'

const BoldItalicFont = styled.span`
    font-weight:600;
    font-style:italic;
    padding:0 .4rem;
`
const BoldItalic = ({children}) => {
    return (
        <BoldItalicFont>{children}</BoldItalicFont>
    )
}

export default BoldItalic
