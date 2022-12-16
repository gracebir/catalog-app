import React from 'react'
import { side1 } from '../../data'
import { CardCat, CardElement, CardQty, Sidecard } from './sidebarstyled'

const SideCard = () => {
  return (
    <Sidecard>
        {side1.map((side, i)=>(
            <CardElement key={i}>
                <CardCat isTitle={i===0}>{side.cat}</CardCat>
                <CardQty>({side.qty})</CardQty>
            </CardElement>
        ))}
    </Sidecard>
  )
}

export default SideCard
