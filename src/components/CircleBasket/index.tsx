import { IconType } from "react-icons"
import { Circlewrapper } from "../Circle/Circlestyled"
import { CirceText, circleBasket, CircleContainer, SmallCircle } from "./circlestyled"

type circleProps = {
    checkout: number
    Icon: IconType
}

function Circlebasket({
    Icon,
    checkout,
    isBasket=false
}: circleProps & circleBasket) {
  return (
    <CircleContainer>
        <Circlewrapper size="40px" isShadow={false}>
            <Icon height={"1rem"}/>
        </Circlewrapper>
        <SmallCircle isBasket={isBasket}>
            <CirceText>{checkout}</CirceText>
        </SmallCircle>
    </CircleContainer>
  )
}

export default Circlebasket
