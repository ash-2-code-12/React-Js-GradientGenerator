import styled from 'styled-components'

export const DirectionButton = styled.button`
  border: none;
  border-radius: 6px;
  color: #334155;
  height: 36px;
  width: 128px;
  background-color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  opacity: ${props => (props.active ? '1' : '0.5')};
`
