import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .875rem;
    align-items: center;
`

export const UpperTitle = styled.p`
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.125rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const Dotitle = styled.div`
    background-color: var(--color-green);
    width: 6px;
    height: 6px;
    border-radius: 10px;
`

export const Span = styled.span`
    font-weight: 700;
`

export const DownTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1.125rem;
`
export const DownTitletext = styled.h1`
    font-weight: 700;
    font-size: 2.8125rem;
    line-height: 55px;
`