import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
background: blue;
color: #fff;
grid-area: header;
`

export const Header = ({children}) => {
    return (
        <StyledHeader className="header">
            {children}
        </StyledHeader>
    )
}
