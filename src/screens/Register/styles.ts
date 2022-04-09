import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 48px 32px 32px 32px;
`
export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`
export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 24px;
  margin-bottom: 32px;
  color: ${props => props.theme.colors.gray_1};
  text-align: center;
`
export const Form = styled.View`
  border-radius: 120px;
`
export const InputContainer = styled.View`
  margin-bottom: 6px;
`
export const InputLabel = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: 4px;
`
export const Footer = styled.View`
  margin: 0 32px;
`
export const TagsContainer = styled.View`
  margin-bottom: 8px;
`