import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
padding: 20px;
background: maroon;
grid-area: footer;
`

export const Footer = ({children}) => {
    return (
        <StyledFooter className="header">
            {children}
        </StyledFooter>
    )
}
