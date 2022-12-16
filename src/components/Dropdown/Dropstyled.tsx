import styled from "styled-components";
import { BiChevronDown } from 'react-icons/bi'
 
export const DropdownWrapper = styled.div`
    width: 16.25em;
    height: 2.5em;
    padding: 0 1.1875rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 90px;
    display: flex;
    gap: 1.1rem;
    align-items: center;
    background-color: var(--color-white); 
`

export const DropText = styled.p`
    font-family: 600;
    font-size: .875em;
    color: #484848;
    line-height: 17px;
`

export const DroptextContainer = styled.div`
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    width: 10.65em;
`

export const Chevronicon = styled(BiChevronDown)`
    color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
`