import React from 'react'
import { TovarButton, TovarButtonText, TovarProductContainer, TovarProductTop, TovarTitle, TovarTitletext } from './tovarproductStyled'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
import Carousel from '../Carousel'

const TovarProduct = () => {
  return (
    <TovarProductContainer>
      <TovarProductTop>
        <TovarTitle>
          <img src={left} alt="" />
          <TovarTitletext>Вам також сподобається</TovarTitletext>
          <img src={right} alt="" />
        </TovarTitle>
      </TovarProductTop>
      <Carousel/>
      <TovarProductTop>
        <TovarButton>
            <TovarButtonText>Дивитися усі товари</TovarButtonText>
        </TovarButton>
      </TovarProductTop>
    </TovarProductContainer>
  )
}

export default TovarProduct
