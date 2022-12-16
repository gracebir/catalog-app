import styled from "styled-components";

export const SideCatcard = styled.div`
   width: 15.9375em;
   height: 82.375em;
   background-color: var(--color-white);
   border-radius: 20px;
   box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
`

export const SidecardHeader = styled.div`
    height: 3.1875em;
    width: 100%;
    background-color: var(--color-green);
    border-radius: 20px 20px 0px 0px;
`

export const SidecardBody = styled.div`
    padding: 1.0625em 1.875em;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CardTitle = styled.p`
    font-weight: 600;
    font-size: 1rem;
    line-height: 20px;
`

export const CardCatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.03em;
`