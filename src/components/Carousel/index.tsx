import React from 'react'
import CarouselButton from '../CarouselButton'
import { CarouselBar, CarouselBarSection, CarouselContainer, CarouselProductSection, CarouselProductWrapper } from './carouselstyled'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai'
import { products } from '../../data'
import ShoppingCard from "../../components/Shoppingcard";

const Carousel = () => {
  return (
    <CarouselContainer>
      <CarouselProductWrapper>
        <CarouselButton Icon={AiOutlineArrowLeft}/>
        <CarouselProductSection>
            {products.slice(0,4).map((product, i) => (
                <ShoppingCard
                key={i}
                  productName={product.productName}
                  price={product.price}
                  detail={product.detail}
                  image={product.image}
                />
              ))}
        </CarouselProductSection>
        <CarouselButton Icon={AiOutlineArrowRight}/>
      </CarouselProductWrapper>
      <CarouselBarSection>
        <CarouselBar isActive={false}/>
        <CarouselBar isActive={false}/>
        <CarouselBar isActive={true}/>
        <CarouselBar isActive={false}/>
        <CarouselBar isActive={false}/>
      </CarouselBarSection>
    </CarouselContainer>
  )
}

export default Carousel
