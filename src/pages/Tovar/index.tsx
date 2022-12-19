import React from 'react'
import { UpperTitle, Dotitle, Span } from '../../components/Titles/titleStyled'
import TovalSmallCard from '../../components/TovarSmallCard'
// eslint-disable-next-line
import { BasketBadge, BasketBadgeText, HeaderRight, SmallCardSection, TopPrice, TopPriceLeft, TopPriceSection, TopPriceText, TovarContainer, ToverCircles, ToverHeader, ToverLeftSection, ToverMain, ToverPrice, ToverPriceButtom, ToverPriceFooter, ToverPriceSub, ToverRigtSection, ToverRigtSectionHeader, ToverSubMain } from './tovarstyled'
import prod from '../../assets/prod1.svg'
import right from '../../assets/right.svg'
import ProductimageCard from '../../components/ProductImageCard'
import PayCard from '../../components/PayCard'
import {BsCheck} from 'react-icons/bs'
import {SlBasket} from 'react-icons/sl'
import { AiOutlineHeart} from 'react-icons/ai'
import Circlebasket from '../../components/CircleBasket'
import TovarTab from '../../components/TovarTab'

const Tovar = () => {
  return (
    <TovarContainer>
        <ToverMain>
            <ToverHeader>
                <UpperTitle>Головна  <Dotitle/> Каталог  <Dotitle/> Засоби захисту рослин<Dotitle/>  <Span>Комманд</Span></UpperTitle>
            </ToverHeader>
            <ToverSubMain>
              <ToverLeftSection>
                <ProductimageCard imageUrl={prod}/>
                <SmallCardSection>
                  <TovalSmallCard imgUrl={prod}/>
                  <TovalSmallCard imgUrl={prod}/>
                  <TovalSmallCard imgUrl={prod}/>
                </SmallCardSection>
              </ToverLeftSection>
              <img src={right} alt="" />
              <ToverRigtSection>
                <HeaderRight>
                  <ToverRigtSectionHeader>Гербіцид Комманд®, ФМС УКРАЇНА</ToverRigtSectionHeader>
                  <TopPriceSection>
                    <TopPriceLeft>
                      <BsCheck/> <TopPriceText>В наявності</TopPriceText>
                    </TopPriceLeft>
                  </TopPriceSection>
                </HeaderRight>
                <PayCard/>
                <hr />
                <ToverPriceFooter>
                  <ToverPriceButtom>
                    <ToverPrice>7814,63 грн</ToverPrice>
                    <ToverPriceSub>Ціна за 5 л </ToverPriceSub>
                  </ToverPriceButtom>
                  <ToverCircles>
                    <BasketBadge>
                      <SlBasket/>
                      <BasketBadgeText>Купити</BasketBadgeText>
                    </BasketBadge>
                    <Circlebasket checkout={0} isBasket={false} Icon={AiOutlineHeart}/>
                    <Circlebasket checkout={1} isBasket={true} Icon={SlBasket}/>
                  </ToverCircles>
                </ToverPriceFooter>
              </ToverRigtSection>
            </ToverSubMain>
            <TovarTab/>
        </ToverMain>
      
    </TovarContainer>
  )
}

export default Tovar
