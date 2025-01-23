import styled from 'styled-components'

export const MainPage = styled.div`
  min-height: 100vh;
  text-align: center;
  padding: 24px;
  background-image: linear-gradient(${props => props.generateOptions});
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 22px;
  font-weight: 500;
`
export const SideHeading = styled.p`
  font-size: 20px;
  color: #ededed;
`
export const ButtonsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
`

export const ColorsContainer = styled.div`
  display: flex;
  gap: 36px;
  align-self: center;
  margin: 12px 0 24px 0;
`

export const ColorName = styled.p`
  color: #ffffff;
  font-size: 16px;
`

export const ColorInput = styled.input`
  height: 54px;
  width 100px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  outline: none;
`

export const GenerateButton = styled.button`
  border: none;
  border-radius: 6px;
  height: 36px;
  width: 100px;
  font-weight: 600;
  font-family: 'Roboto';
  background-color: #00c9b7;
  color: #1e293b;
  margin: 4px auto;
  opacity: 1;
`
