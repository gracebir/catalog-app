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