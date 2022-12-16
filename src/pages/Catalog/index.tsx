import React from 'react'
import Circle from '../../components/Circle'
import Dropdown from '../../components/Dropdown'
import ShoppingCard from '../../components/Shoppingcard'
import SideCard from '../../components/SideCard'
import SideCategory from '../../components/SideCategory'
import Titles from '../../components/Titles'
import { pagenumbers, products } from '../../data'
import { CatalogContainer, CatalogProductCategorySection, CatalogProductContainer, CatalogProductSection, DivCat, DivCatText, PageCircle, PageCircletext, PageNavigation, PageNumbers, PageNumberSection, ProductCardSection } from './catalogStyled'
import { BiChevronLeft} from 'react-icons/bi'
import { BiChevronRight} from 'react-icons/bi'

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
      <PageNumberSection>
      <PageNavigation>
        <Circle Icon={BiChevronLeft} size={"30px"} isShadow={false}/>
        <PageNumbers>
            {pagenumbers.map((page, i)=>(
                <PageCircle key={i}>
                    <PageCircletext>{page}</PageCircletext>
                </PageCircle>
            ))}
        </PageNumbers>
        <Circle Icon={BiChevronRight} size={"30px"} isShadow={false}/>
      </PageNavigation>
      </PageNumberSection>
    </CatalogContainer>
  )
}

export default Catalog
