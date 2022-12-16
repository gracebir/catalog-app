import styled from "styled-components";

export const Card = styled.div`
   width: 15.9375em;
   height: 22.1875em;
   padding: .625em;
   background-color: var(--color-white);
   border-radius: 20px;
   &:hover{
      box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
   };
   display: flex;
   flex-direction: column;
`

export const CardIconContainer = styled.div`
   width: 1em;
   height: 1em;
   margin: .625rem 0 0 12.625rem;
`

export const Cardicon = styled.img`
  width: 100%;
`

export const CardHeader = styled.div`
   display: flex;
   justify-content: center;
`

export const CardImageContainer = styled.div`
   width: 6.0625em;
   height: 8.25em;
`

export const CardBody = styled.div`
   width: 100%;
   height: 9.375em;
   background-color: #8C32130F;
   padding: 1.3125em 1.25em 1.5625em 1.25em;
   border-radius: 20px;
   display: flex;
   margin-top: 2em;
   flex-direction: column;
   gap: 1.0625rem;
`

export const CardTitles = styled.div`
   display: flex;
   flex-direction: column;
`

export const ProductName = styled.h3`
   font-size: 1rem;
   font-weight: 600;
   line-height: 19.5px;
`

export const Productdetail = styled.p`
   color: var(--color-dark-green);
   font-size: .875rem;
   line-height: 17.07px;
`

//000000000000000000000000000000000000000000000000000
export const CardFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const Pricing = styled.div`
   display: flex;
   flex-direction: column;
   gap: .3em;
`

export const ProdPrice = styled.p`
   font-size: 1.125rem;
   font-weight: 700;
   color: var(--color-green);
   line-height: 22px;
`

export const ProdSubPrice = styled.span`
   font-size: .875rem;
`