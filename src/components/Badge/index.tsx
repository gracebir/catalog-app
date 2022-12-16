import { BadgeContainer, BadgeIcon, BadgeText } from './Badgestyled'

type badgeProp = {
    Icon: string
    text: string
}

const Badge = ({
    Icon,
    text
}: badgeProp) => {
  return (
    <BadgeContainer>
      <BadgeIcon src={Icon} alt=""/>
      <BadgeText>{text}</BadgeText>
    </BadgeContainer>
  )
}

export default Badge
