import { IconType } from "react-icons";
import styled from "styled-components";

export type circle = {
    size: string,
    isShadow: boolean
}

export type circleProps = {
    Icon: IconType,
}

export const Circlewrapper = styled.div<circle>`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 90px;
    background-color: var(--color-white);
    color: var(--color-dark-red);
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => !props.isShadow ? `1px solid #8C3213`: `none`};
    box-shadow: ${props => props.isShadow ? `0px 0px 8px rgba(0, 0, 0, 0.15)`: `none`};
    cursor: pointer;
    transition: ease-in-out .2s;
    &:hover{
        background-color: var(--color-dark-red);
        color: var(--color-white);
    }
`

export const Circleicon = styled.img`
    height: 1em;
    width: 1em;
    &:hover{
        color: var(--color-white);
    }
`

