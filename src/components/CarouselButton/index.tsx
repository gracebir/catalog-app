import React from 'react'
import { IconType } from 'react-icons'
import { CarouselButtonwrapper } from './carouselButtonStyled'

type carouleButtonProps = {
    Icon : IconType
}

const CarouselButton = ({
    Icon
}:carouleButtonProps) => {
  return (
    <CarouselButtonwrapper>
        <Icon height={"1rem"}/>
    </CarouselButtonwrapper>
  )
}

export default CarouselButton
