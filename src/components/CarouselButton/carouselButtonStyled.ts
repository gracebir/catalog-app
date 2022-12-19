import styled from "styled-components";

export const CarouselButtonwrapper = styled.div`
    width: 4.375em;
    height: 4.375em;
    border-radius: 90px;
    background-color: var(--color-dark-green);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #84C551;
    cursor: pointer;
    transition: ease-in-out .2s;
    &:hover{
        background-color: var(--color-green);
    }
`