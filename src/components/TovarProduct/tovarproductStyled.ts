import styled from "styled-components";

export const TovarProductContainer = styled.div`
    height: 53.3125em;
    width: 100%;
    background-color: var(--color-dark-green);
    margin-top: 7.6em;
    padding: 7em 0;
    display: flex;
    flex-direction: column;
    gap: 2.5em;
`

export const TovarProductTop = styled.div`
    width: 58%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const TovarTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1.125rem;
`
export const TovarTitletext = styled.h1`
    font-weight: 700;
    font-size: 2.8125rem;
    color: var(--color-white);
`

export const TovarButton = styled.div`
    width: 13.75em;
    height: 2.9em;
    background-color: var(--color-red);
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TovarButtonText = styled.p`
    font-size: 1rem;
    color: var(--color-white);
    font-weight: 700;
`