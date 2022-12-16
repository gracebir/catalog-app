import styled from "styled-components";

export const CatalogContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.8125em;
    gap: 1.8em;
    margin-right: 2.2rem;
`

export const CatalogProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
`

export const DivCat = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DivCatText = styled.p`
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    font-weight: 400;
`

export const CatalogProductSection = styled.div`
    display: flex;
    gap: 1.875em;
`

export const ProductCardSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.875em;
`

export const CatalogProductCategorySection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.875em;
`

export const PageNumberSection = styled.div`
    width: 74%;
    margin-left: 26%;
    display: flex;
    justify-content: space-around;
`

export const PageNavigation = styled.div`
    display: flex;
    gap: 1.25em;
`

export const PageNumbers = styled.div`
    display: flex;
    gap: 0.625em;
`

export const PageCircle = styled.div`
    width: 1.875em;
    height: 1.875em;
    cursor: pointer;
    border-radius: 90px;
    border: 1px solid var(--color-red);
    color: var(--color-red);
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        color: var(--color-white);
        background-color: var(--color-red);
    }
`
export const PageCircletext = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
`