import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai'
export const SearchinputContainer = styled.div`
    width: 21.375em;
    height: 2.5em;
    padding: 0 1.1875rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 90px;
    display: flex;
    gap: .875rem;
    align-items: center;
    background-color: var(--color-white); 
`

export const Input = styled.input`
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    width: 16.925em;
    border: none;
    outline: none;
`

export const Searchicon = styled(AiOutlineSearch)`
    color: var(--color-dark-green);
    cursor: pointer;
`

export const Searchline = styled.img``