import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.aside`
background: orange;
min-height: 100px;
grid-area: sidebar;

/*flexbox para acomodar elementos*/

display: flex;
align-items: center;
justify-content: center;


`

export const Sidebar = ({children}) => {
    return (
        <StyledSidebar className="sidebar">
            {children}
        </StyledSidebar>
    )
}
