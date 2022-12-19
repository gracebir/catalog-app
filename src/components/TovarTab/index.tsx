import React from 'react'
import { tabListItem } from '../../data'
import { DivFirstSection, TabBody, TabBodyHeader, TabBodySection, TabButton, TabButtonSection, TabButtontext, TabHeaderParagraph, TabList, TabParagraph, TabSectionContainer, TabSpan, TabTextWrapper, TovarTabContainer } from './tovartabStyled'

const TovarTab = () => {
  return (
    <TovarTabContainer>
      <TabButtonSection>
        <TabButton isActive={true}>
            <TabButtontext isActive={true}>Опис</TabButtontext>
        </TabButton>
        <TabButton isActive={false}>
            <TabButtontext isActive={false}>Відгуки</TabButtontext>
        </TabButton>
      </TabButtonSection>
      <TabBody>
        <TabBodySection>
            <TabBodyHeader>Генерал на полі</TabBodyHeader>
            <TabSectionContainer>
                <TabHeaderParagraph>Генерал на полі. Досходовий гербіцид для боротьби з однорічними дводольними та деякими злаковими бур’янами в посівах ріпаку та інших культур.</TabHeaderParagraph>
                <DivFirstSection>
                    <TabSpan>Діюча речовина:</TabSpan><TabParagraph> Кломазон, 480 г/л</TabParagraph>
                </DivFirstSection>
                <DivFirstSection>
                    <TabSpan>Препаративна форма:</TabSpan><TabParagraph>Концентрат емульсіі</TabParagraph>
                </DivFirstSection>
                <DivFirstSection>
                    <TabSpan>Норма використання:</TabSpan><TabParagraph>0,2-0,6 л/га</TabParagraph>
                </DivFirstSection>
                <DivFirstSection>
                    <TabSpan>Клас токсичності:</TabSpan><TabParagraph>2.</TabParagraph>
                </DivFirstSection>
                <DivFirstSection>
                    <TabSpan>Термін зберігання:</TabSpan><TabParagraph>2 роки.</TabParagraph>
                </DivFirstSection>
            </TabSectionContainer>
        </TabBodySection>
        <TabBodySection>
            <TabBodyHeader>Характеристики</TabBodyHeader>
            <TabTextWrapper>
                <TabHeaderParagraph>Системний препарат потрапляє до рослини через гіпокотиль (підсім´ядольне колінце) та кореневу систему і рухається по ксилемі до листків;</TabHeaderParagraph>
                {tabListItem.slice(0,7).map((list, i)=>(
                    <TabList key={i}>{list}</TabList>
                ))}
            </TabTextWrapper>
        </TabBodySection>
        <TabBodySection>
            <TabBodyHeader>Рекомендації:</TabBodyHeader>
            <TabTextWrapper>
                {tabListItem.slice(7,tabListItem.length).map((list, i)=>(
                    <TabList key={i}>{list}</TabList>
                ))}
            </TabTextWrapper>
        </TabBodySection>
      </TabBody>
    </TovarTabContainer>
  )
}

export default TovarTab


