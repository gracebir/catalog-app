import styled from "styled-components"

type cardPros = {
    isTitle: boolean
}

export const Sidecard = styled.div`
   width: 15.9375em;
   height: 22.1875em;
   padding: 1.75em 1.875em;
   background-color: var(--color-white);
   border-radius: 20px;
   box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
   display: flex;
   flex-direction: column;
   gap: 1.3em;
`

export const CardElement = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CardCat = styled.p<cardPros>`
    color: ${props => props.isTitle ? `var(--color-green)`: `rgba(0, 0, 0, 0.5)`};
    font-weight: ${props => props.isTitle ? `700`: `400`};
    font-size: 1rem;
`

export const CardQty = styled.p`
    color: var(--color-red);
    font-size: .75rem;
    font-weight: 400;
    line-height: 0.9em;
`