import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainPage,
  Heading,
  SideHeading,
  ButtonsList,
  GenerateButton,
  ColorsContainer,
  ColorName,
  ColorInput,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    generateOptions: 'to top, #8ae323, #014f7b',
  }

  onDirectionChange = direction => {
    this.setState({activeDirection: direction})
  }

  onColor1Change = event => {
    this.setState({color1: event.target.value})
  }

  onColor2Change = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = () => {
    const {activeDirection, color1, color2} = this.state
    const generateOptions = `to ${activeDirection}, ${color1}, ${color2}`
    this.setState({generateOptions})
  }

  render() {
    const {activeDirection, color1, color2, generateOptions} = this.state

    return (
      <MainPage
        generateOptions={generateOptions}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SideHeading>Choose Direction</SideHeading>
        <ButtonsList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              activeDirection={activeDirection}
              directionObj={each}
              onDirectionChange={this.onDirectionChange}
            />
          ))}
        </ButtonsList>
        <SideHeading>Pick the Colors</SideHeading>

        <ColorsContainer>
          <div>
            <ColorName>{color1}</ColorName>
            <ColorInput
              onChange={this.onColor1Change}
              type="color"
              value={color1}
            />
          </div>
          <div>
            <ColorName>{color2}</ColorName>
            <ColorInput
              onChange={this.onColor2Change}
              type="color"
              value={color2}
            />
          </div>
        </ColorsContainer>

        <GenerateButton onClick={this.onGenerate} type="button">
          Generate
        </GenerateButton>
      </MainPage>
    )
  }
}

export default GradientGenerator
