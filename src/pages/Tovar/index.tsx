import React from 'react'
import { UpperTitle, Dotitle, Span } from '../../components/Titles/titleStyled'
import TovalSmallCard from '../../components/TovarSmallCard'
import { TovarContainer, ToverHeader, ToverMain } from './tovarstyled'
import prod from '../../assets/prod1.svg'
import ProductimageCard from '../../components/ProductImageCard'

const Tovar = () => {
  return (
    <TovarContainer>
        <ToverMain>
            <ToverHeader>
                <UpperTitle>Головна  <Dotitle/> Каталог  <Dotitle/> Засоби захисту рослин<Dotitle/>  <Span>Комманд</Span></UpperTitle>
            </ToverHeader>
            <ProductimageCard imageUrl={prod}/>
            <TovalSmallCard imgUrl={prod}/>
        </ToverMain>
      
    </TovarContainer>
  )
}

export default Tovar
