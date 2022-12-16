import styled from "styled-components";
import info from '../../assets/infoimage.svg'

export const Divider = styled.div`
    width: 100%;
    margin-top: 2.8125em;
`

export const CatalogContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 58%;
    gap: 1.8em;
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

export const InfoSection = styled.div`
    height: 31.25em;
    margin-top: 7.5em;
    width: 100%;
    background-image: url(${info});
    object-fit: cover;
    background-repeat: no-repeat;
    padding: 6.75em 0;
`

export const InfoTextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 58%;
    margin: 0 auto;
`

export const InfoTitleWrap = styled.div`
    display: flex;
    gap: .3em;
    align-items: center;
`

export const InfoTitle = styled.h2`
    font-size: 2.8125rem;
    font-weight: 700;
    color: var(--color-white);
`
export const InfoPara = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-white);
    line-height: 1.25em;
`