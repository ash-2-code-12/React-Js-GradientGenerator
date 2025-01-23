import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeDirection, directionObj, onDirectionChange} = props
  const {value, displayText} = directionObj

  return (
    <li>
      <DirectionButton
        onClick={() => onDirectionChange(value)}
        type="button"
        active={value === activeDirection}
      >
        {displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem
