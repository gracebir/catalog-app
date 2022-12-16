import { 
    HeaderContactSection, 
    HeaderContainer, 
    CircleSection, 
    TopHeader, 
    TopHeaderSearch, 
    Phonenumber, 
    PhoneText, 
    PhoneSubInfo, 
    CircleSubSection,
    CircleSectionText,
    HeaderCatSection
} from './headerStyled'
import { SlBasket } from 'react-icons/sl';
import logo from '../../assets/logo.svg'
import Searchinput from '../Searchinput'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaBalanceScaleLeft } from 'react-icons/fa'
import Circle from '../Circle'
import chevron from '../../assets/chevron.svg'
import Circlebasket from '../CircleBasket'
import Badge from '../Badge';
import { badgedata } from '../../data';

const Header = () => {
  return (
    <HeaderContainer>
      <TopHeader>
        <TopHeaderSearch>
            <img src={logo} alt=""/>
            <Searchinput/>
        </TopHeaderSearch>
        <HeaderContactSection>
            <Circle size='40px' isShadow={false} Icon={BsTelephone}/>
            <div>
                <Phonenumber>
                    <PhoneText>+38 (067) 115 00 58</PhoneText>
                    <img src={chevron} alt="" />
                </Phonenumber>
                <PhoneSubInfo>Замовити зворотній зв’язок</PhoneSubInfo>
            </div>
        </HeaderContactSection>
        <CircleSection>
            <CircleSubSection>
                <Circlebasket
                    checkout={1}
                    Icon={AiOutlineHeart}
                    isBasket={false}
                />
                <Circlebasket
                    checkout={1}
                    Icon={FaBalanceScaleLeft}
                    isBasket={true}
                />
                <Circlebasket
                    checkout={1}
                    Icon={SlBasket}
                    isBasket={true}
                />
            </CircleSubSection>
            <CircleSectionText>0,0 грн</CircleSectionText>
        </CircleSection>
      </TopHeader>
      <HeaderCatSection>
        {badgedata.map((badge, i)=>(
            <Badge key={i} Icon={badge.Icon} text={badge.text}/>
        ))}
      </HeaderCatSection>
    </HeaderContainer>
  )
}

export default Header
