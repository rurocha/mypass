import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Btn = styled(RectButton).attrs({
  rippleColor: '#f5f5f5'
})`
  width: 100%;
  background-color: ${props => props.theme.colors.gray_1};
  border-radius: 32px;
  padding: 16px;
  align-self: flex-start;
`
export const Label = styled.Text`
  color: ${props => props.theme.colors.neutral_light};
  text-align: center;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 18px;
`