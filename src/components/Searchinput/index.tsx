import { Input, Searchicon, SearchinputContainer, Searchline } from "./Searchstyled"
import SearchLine from '../../assets/line1.svg'
const Searchinput = () => {
  return (
    <SearchinputContainer>
      <Input placeholder="Пошук"/>
      <Searchline src={SearchLine}/>
      <Searchicon/>
    </SearchinputContainer>
  )
}

export default Searchinput
