import React from 'react'
import Dropdown from '../../components/Dropdown'
import Titles from '../../components/Titles'
import { CatalogContainer, CatalogProductContainer, DivCat, DivCatText } from './catalogStyled'

function Catalog() {
  return (
    <CatalogContainer>
      <Titles isSubtitle={true}/>
      <CatalogProductContainer>
        <DivCat>
            <DivCatText>Показано 621 товарів</DivCatText>
            <Dropdown/>
        </DivCat>
      </CatalogProductContainer>
    </CatalogContainer>
  )
}

export default Catalog
