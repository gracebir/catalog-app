import styled from "styled-components";

export const CardPayContainer = styled.div`
    width: 36.5em;
    height: 10.875em;
    padding: 1em 1.25em;
    background-color: var(--color-white);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
`

export const PaySectionHeader = styled.p`
    font-weight: 700;
    font-size: .875rem;
`

export const PayPar = styled.p`
    color: rgba(0, 0, 0, 0.5);
    font-size: .875rem;
    font-weight: 400;
`

export const FmcSection = styled.div`
    display: flex;
    gap: 9px;
    align-items: center;
`

export const PayCardSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8em;
    flex: 1;
`

export const PayContactSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8em;
    width: 217px;
`

export const PayMethodSection = styled.div`
    display: flex;
    gap: 0.75em;
`

export const PayToSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625em;
`

export const PayContactWrapper = styled.div`
    width: 13.75rem;
    height: 2.93em;
    border-radius: 90px;
    font-size: 1rem;
    padding: .75em 1em;
    border: 1px solid var(--color-red);
    color: var(--color-red);
    display: flex;
    align-items: center;
    gap: 11.6px;
`

export const Divisor = styled.hr`
    margin: 0 1em;
`

export const PayContactText = styled.p`
    font-size: 1rem;
    color: var(--color-red);
    font-weight: 700;
    
`

export const VerySmallCard = styled.div`
    width: 2.125em;
    height: 1.5em;
    border-radius: 4px;
    background-color: var(--color-white);
    border: 1px solid #D9D9D9;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`
