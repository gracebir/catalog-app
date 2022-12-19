import styled from "styled-components";

type tabButtonProps = {
    isActive : boolean
}

export const TovarTabContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TabButtonSection = styled.div`
    display: flex;
    flex-direction: row;
`

export const TabButton = styled.div<tabButtonProps>`
    width: 13.75em;
    height: 2.75em;
    background-color: ${props => props.isActive ? `var(--color-dark-green)`: `none`};
    box-shadow: ${props => props.isActive ? `0px 0px 8px rgba(0, 0, 0, 0.15))`: `none`};
    border-radius: ${props => props.isActive ? `20px 20px 0px 0px`: `none`};
    padding: .9em 0;
    cursor: pointer;
`

export const TabButtontext = styled.p<tabButtonProps>`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.isActive ? `var(--color-white)`: `#000`};
    text-align: center;
`

export const TabBody = styled.div`
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 0px 20px 20px 20px;
    background-color: var(--color-white);
    height: 65.125em;
    padding: 1em 2.5em;
    display: flex;
    flex-direction: column;
    gap: 13px;
`

export const TabBodySection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;
`

export const TabBodyHeader = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
`

export const TabSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .9em;
`

export const TabTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .325em;
`

export const TabSpan = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-dark-green);
`

export const DivFirstSection = styled.div`
    display: flex;
    gap: .3em;
`

export const TabParagraph = styled.p`
    font-size: 1rem;
    font-weight: 400;
`

export const TabHeaderParagraph = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 24.54px;
`

export const TabList = styled.li`
    margin-left: .4em;
    line-height: 24.54px;
`