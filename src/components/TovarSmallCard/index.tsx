import React from 'react'
import { CardTovarSmallImg, SmallCardImageContainer, SmallCardTovar } from './tovarcardStyled'

type tovalSmallcardProps = {
    imgUrl: string
}

const TovalSmallCard = (
    {
        imgUrl
    }: tovalSmallcardProps
) => {
  return (
    <SmallCardTovar>
      <SmallCardImageContainer>
        <CardTovarSmallImg src={imgUrl} alt="" />
      </SmallCardImageContainer>
    </SmallCardTovar>
  )
}

export default TovalSmallCard
