import React from 'react'
import Dropdown from '../../components/Dropdown'
import ShoppingCard from '../../components/Shoppingcard'
import SideCard from '../../components/SideCard'
import SideCategory from '../../components/SideCategory'
import Titles from '../../components/Titles'
import { products } from '../../data'
import { CatalogContainer, CatalogProductCategorySection, CatalogProductContainer, CatalogProductSection, DivCat, DivCatText, ProductCardSection } from './catalogStyled'

function Catalog() {
  return (
    <CatalogContainer>
      <Titles isSubtitle={true}/>
      <CatalogProductContainer>
        <DivCat>
            <DivCatText>Показано 621 товарів</DivCatText>
            <Dropdown/>
        </DivCat>
        <CatalogProductSection>
            <CatalogProductCategorySection>
                <SideCard/>
                <SideCategory/>
            </CatalogProductCategorySection>
            <ProductCardSection>
                {products.map((product, i)=>(
                    <ShoppingCard
                        productName={product.productName}
                        price={product.price}
                        detail={product.detail}
                        image={product.image}
                    />
                ))}
            </ProductCardSection>
        </CatalogProductSection>
      </CatalogProductContainer>
    </CatalogContainer>
  )
}

export default Catalog
