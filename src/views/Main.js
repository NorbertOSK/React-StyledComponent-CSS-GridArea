import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
grid-area: contenido;
`

export const Main = ({children}) => {
    return (
        <StyledMain className="contenido">
            {children}
        </StyledMain>
    )
}
