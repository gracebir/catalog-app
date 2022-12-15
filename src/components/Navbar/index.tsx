import { DropdowSection, Dropicon, Droptext, NavbarLeft, NavbarRight, Nav, NavItemSection, NavLink, Navline, Navcontainer, Previousicon } from "./Navbarstyled"
import Chevron from '../../assets/chevron.svg';
import Line from '../../assets/line.svg';
import Preview from '../../assets/preview.svg';
import { navitems } from '../../data/index'

const Navbar = () => {
  return (
    <Nav>
      <Navcontainer>
        <NavbarLeft>
            <DropdowSection>
                <Droptext>Про нас</Droptext>
                <Dropicon src={Chevron} alt="chevron"/>
            </DropdowSection>
            <NavItemSection>
                {navitems.map((item, i)=>(
                    <NavLink key={i}>{item.item}</NavLink>
                ))}
            </NavItemSection>
        </NavbarLeft>
        <Navline src={Line} alt="line1"/>
        <NavbarRight>
            <Previousicon src={Preview} alt="preview"/>
            <Droptext>Вхід | Реестрація</Droptext>
        </NavbarRight>
      </Navcontainer>
    </Nav>
  )
}

export default Navbar
