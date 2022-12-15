import styled from "styled-components";

export const BadgeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 12.5em;
    gap: .5rem;
    padding: 0 .7rem;
    height: 2.5em;
    border: 1px solid var(--color-dark-green);
    border-radius: 20px;
    cursor: pointer;
`

export const BadgeIcon = styled.img`
    height: 1.24615rem;
    color: var(--color-green);
`

export const BadgeText = styled.p`
    color: var(--color-back);
    font-size: .875rem;
    font-weight: 600;
    text-transform: uppercase;
`