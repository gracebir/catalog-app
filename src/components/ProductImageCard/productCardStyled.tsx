import styled from "styled-components";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export const ProductCardTovar = styled.div`
    width: 27.8em;
    height: 18.2em;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: .9em 1em;
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProductCardImageContainer = styled.div`
    width: 8.9em;
    height: 12.2em;
`
export const ProdcutCardImg = styled.img`
    width: 100%;
    height: 100%;
`

export const ArrowLeft = styled(AiOutlineArrowLeft)`
    color: var(--color-green);
    cursor: pointer;
    &:hover{
        color: var(--color-red);
    }
`

export const ArrowRight = styled(AiOutlineArrowRight)`
    color: var(--color-green);
    cursor: pointer;
    &:hover{
        color: var(--color-red);
    }
`