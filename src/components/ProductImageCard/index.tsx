import React from 'react'
import { ArrowLeft, ArrowRight, ProdcutCardImg, ProductCardImageContainer, ProductCardTovar } from './productCardStyled'


type productCardImgProps = {
    imageUrl : string
}

const ProductimageCard = ({
    imageUrl
}: productCardImgProps) => {
  return (
    <ProductCardTovar>
        <ArrowLeft/>
        <ProductCardImageContainer>
            <ProdcutCardImg src={imageUrl} alt=''/>
        </ProductCardImageContainer>
        <ArrowRight/>
    </ProductCardTovar>
  )
}

export default ProductimageCard
