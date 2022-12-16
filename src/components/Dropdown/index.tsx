import React from 'react'
import line from '../../assets/line1.svg'
import { Chevronicon, DropdownWrapper, DropText, DroptextContainer } from './Dropstyled'

function Dropdown() {
  return (
    <DropdownWrapper>
      <DroptextContainer>
        <DropText>Сортувати за</DropText>
      </DroptextContainer>
      <img src={line}/>
      <Chevronicon/>
    </DropdownWrapper>
  )
}

export default Dropdown
