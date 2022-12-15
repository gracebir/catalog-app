import styled from "styled-components";

export type circleBasket = {
    isBasket: boolean
}

export const CircleContainer = styled.div`
    display: flex;
`

export const SmallCircle = styled.div<circleBasket>`
    background-color: var(--color-green);
    width: .875rem;
    height: .875rem;
    display: ${props => props.isBasket ? `flex`: 'none'};
    justify-content: center;
    border-radius: 90px;
    margin-left: -.7rem;
`

export const CirceText = styled.p`
    font-size: .625rem;
    color: var(--color-white);
`