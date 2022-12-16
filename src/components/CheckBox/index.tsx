import React from 'react'
import { InputCheck, CheckWrapper, Checked, CheckText } from './Checkstyled'

type checkboxProps = {
    label: string
}

const CheckBox = ({label}: checkboxProps) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)
    const handleClick = () => setIsChecked(!isChecked);
  return (
    <CheckWrapper>
      <InputCheck onClick={handleClick}>
        <Checked isChecked={isChecked}/>
      </InputCheck>
      <CheckText>{label}</CheckText>
    </CheckWrapper>
  )
}

export default CheckBox
