import React from 'react'
import styled from 'styled-components'

const StyledWigget = styled.div`

background: orchid;
height: 100px;

grid-area: ${props => props.nameStyle === "widget-1" ? "widget-1" : "widget-2"};

/*flexbox para acomodar elementos*/

display: flex;
align-items: center;
justify-content: center;


`

export const Widget = ({children, nameStyle}) => {
    return (
        <StyledWigget className={nameStyle} nameStyle={nameStyle}>
            {children}
        </StyledWigget>
    )
}