import { side2 } from '../../data'
import CheckBox from '../CheckBox'
import { CardCatWrapper, CardTitle, SidecardBody, SidecardHeader, SideCatcard } from './Sidecatstyled'

const SideCategory = () => {
  return (
    <SideCatcard>
      <SidecardHeader/>
      <SidecardBody>
        <CardCatWrapper>
            <CardTitle>Виробник</CardTitle>
            {side2.slice(0,6).map((label, i)=>(
                <CheckBox key={i} label={label}/>
            ))}
        </CardCatWrapper>
        <hr/>
        <CardCatWrapper>
            <CardTitle>Культура</CardTitle>
            {side2.slice(7,26).map((label, i)=>(
                <CheckBox key={i} label={label}/>
            ))}
        </CardCatWrapper>
        <hr />
        <CardCatWrapper>
            <CardTitle>Кількість</CardTitle>
            {side2.slice(26,side2.length).map((label, i)=>(
                <CheckBox key={i} label={label}/>
            ))}
        </CardCatWrapper>
      </SidecardBody>
    </SideCatcard>
  )
}

export default SideCategory
