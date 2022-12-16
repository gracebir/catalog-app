import { Dotitle, DownTitle, DownTitletext, Span, titleProps, TitleWrapper, UpperTitle } from './titleStyled'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'


function Titles({isSubtitle}: titleProps) {
  return (
    <TitleWrapper>
      <UpperTitle>Головна  <Dotitle/> Каталог  <Dotitle/>  <Span>Засоби захисту рослин</Span></UpperTitle>
      <DownTitle isSubtitle={isSubtitle}>
        <img src={left} alt="" />
        <DownTitletext>Засоби захисту рослин</DownTitletext>
        <img src={right} alt="" />
      </DownTitle>
    </TitleWrapper>
  )
}

export default Titles
