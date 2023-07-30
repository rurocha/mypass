import styled from 'styled-components/native'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'

export const Container = styled(RectButton).attrs({
  rippleColor: '#9B9A9A'
})`
  flex-direction: row;
  background-color: ${props => props.theme.colors.gray_3};
  border-radius: 8px;
  padding: 12px 8px 12px 12px;
  justify-content: space-between;
  align-items: center;
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`
export const NameText = styled.Text`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.gray_1};
  text-transform: capitalize;
`
export const UserText = styled.Text`
  color: ${props => props.theme.colors.gray_2};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 10px;
`
export const PasswordText = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.gray_1};
  margin-right: 20px;
`
export const WebsiteIcon = styled.Image`
  width: 57px;
  height: 57px;
  border-radius: 10px;
  margin-right: 16px;
`
export const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`
export const ButtonView = styled(BorderlessButton)`
  margin-right: 12px;
`
export const ButtonViewIcon = styled(Feather)`
  font-size: 22px;
  color: ${props => props.theme.colors.gray_2};
`
export const ButtonCopy = styled(BorderlessButton)`

`
export const ButtonCopyIcon = styled(Feather)`
  font-size: 22px;
  color: ${props => props.theme.colors.gray_2};
`
export const Actions = styled.View`

`
export const ButtonOptions = styled(BorderlessButton)`

`
export const ButtonOptionsIcon = styled(Feather)`
  font-size: 32px;
`
export const TextsContainer = styled.View`

`
