import React from 'react'
import { 
    CardPayContainer, 
    Divisor, 
    FmcSection, 
    PayCardSection, 
    PayContactSection, 
    PayContactText, 
    PayContactWrapper, 
    PayMethodSection, 
    PayPar, 
    PaySectionHeader, 
    PayToSection,
    VerySmallCard
} from './paycardStyled'
import {BsTelephone} from 'react-icons/bs'
import {RiVisaLine} from 'react-icons/ri'
import {SiMastercard} from 'react-icons/si'
import { GiMoneyStack } from 'react-icons/gi'
import fmc from '../../assets/fmc.svg'

function PayCard() {
  return (
    <CardPayContainer>
        <PayCardSection>
            <PayToSection>
                <PaySectionHeader>Виробник</PaySectionHeader>
                <FmcSection>
                    <img src={fmc} alt=''/>
                    <PayPar>ФМС Украина</PayPar>
                </FmcSection>
            </PayToSection>
            <PayToSection>
                <PaySectionHeader>Оплата</PaySectionHeader>
                <PayMethodSection>
                    <VerySmallCard>
                        <RiVisaLine/>
                    </VerySmallCard>
                    <VerySmallCard>
                        <SiMastercard/>
                    </VerySmallCard>
                    <VerySmallCard>
                        <GiMoneyStack/>
                    </VerySmallCard>
                </PayMethodSection>
            </PayToSection>
        </PayCardSection>
        <Divisor />
        <PayContactSection>
            <PayToSection>
                <PaySectionHeader>Доставка</PaySectionHeader>
                <PayPar>Завтра відповідно до тарифів перевізника</PayPar>
            </PayToSection>
            <PayContactWrapper>
                <BsTelephone/>
                <PayContactText>Замовити дзвінок</PayContactText>
            </PayContactWrapper>
        </PayContactSection>
     
    </CardPayContainer>
  )
}

export default PayCard
