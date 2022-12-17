import { ContactHeader, ContactWrapper, FooterContainer, FooterLink, FooterLinkSections, FooterMainContainer, FooterMainWrapper, FooterText, LogoContainer, LogoText, Mailtext, ScrollButton } from "./footerstyled"
import logo from '../../assets/logo.svg'
import { footerLinks } from "../../data"
import { HeaderContactSection, Phonenumber, PhoneSubInfo, PhoneText } from "../Header/headerStyled"
import chevron from '../../assets/chevron.svg'
import Circle from "../Circle"
import { BsTelephone } from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import arrow from '../../assets/arrow.svg'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterMainContainer>
                <FooterMainWrapper>
                    <LogoContainer>
                        <img src={logo} alt="" />
                        <LogoText>Пропонуємо покупцям широкий вибір насіння овочів</LogoText>
                    </LogoContainer>
                    <FooterLinkSections>
                        <ContactHeader>Інформація</ContactHeader>
                        {footerLinks.slice(0,3).map((footerLink, i)=>(
                            <FooterLink>{footerLink}</FooterLink>
                        ))}
                    </FooterLinkSections>
                    <FooterLinkSections>
                        <ContactHeader>Товари</ContactHeader>
                        {footerLinks.slice(4,footerLinks.length).map((footerLink, i)=>(
                            <FooterLink>{footerLink}</FooterLink>
                        ))}
                    </FooterLinkSections>
                    <FooterLinkSections>
                    <ContactHeader>Контакти</ContactHeader>
                    <ContactWrapper>
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
                        <HeaderContactSection>
                            <Circle size='40px' isShadow={false} Icon={AiOutlineMail}/>
                            <Mailtext>DAT@gmail.com</Mailtext>
                        </HeaderContactSection>
                    </ContactWrapper>
                    </FooterLinkSections>
                </FooterMainWrapper>
                <hr />
                <FooterText>{"© 2022 DAT"}</FooterText>
            </FooterMainContainer>
            {/* <ScrollButton><img src={arrow} alt=""/></ScrollButton> */}
        </FooterContainer>
    )
}

export default Footer