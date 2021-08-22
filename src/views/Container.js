import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 90%;
    max-width: 1000px;
    margin:20px auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
`

export const Container = ({children}) => {
    return (
        <StyledContainer className="contenedor">
            {children}
        </StyledContainer>
    )
}
