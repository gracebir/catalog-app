import React from 'react'
import { Dotitle, DownTitle, DownTitletext, Span, TitleWrapper, UpperTitle } from './titleStyled'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'

function Titles() {
  return (
    <TitleWrapper>
      <UpperTitle>Головна  <Dotitle/> Каталог  <Dotitle/>  <Span>Засоби захисту рослин</Span></UpperTitle>
      <DownTitle>
        <img src={left} alt="" />
        <DownTitletext>Засоби захисту рослин</DownTitletext>
        <img src={right} alt="" />
      </DownTitle>
    </TitleWrapper>
  )
}

export default Titles
