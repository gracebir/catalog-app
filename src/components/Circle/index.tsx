import { circle, circleProps, Circlewrapper } from './Circlestyled'

function Circle({
    size,
    Icon,
    isShadow=false
}: circleProps & circle) {
  return (
    <Circlewrapper isShadow={isShadow} size={size}>
      <Icon height={"1rem"}/>
    </Circlewrapper>
  )
}

export default Circle
