import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IStyles {
  isActive: boolean | undefined;
}

export const Container = styled.View`
  flex-direction: row;
`
export const Tag = styled(TouchableOpacity)`
`
export const LabelContainer = styled.View<IStyles>`
margin-right: 8px;
margin-bottom: 4px;
border-radius: 14px;
border-radius: 14px;
border-style: solid;
border-width: 1px;
border-color: ${props => props.isActive ? props.theme.colors.orange_2 : props.theme.colors.gray_3};
background-color: ${props => props.isActive ? props.theme.colors.orange_3 : props.theme.colors.gray_3};
padding: 8px 12px;
`
export const Label = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray_1};
  font-family: ${props => props.theme.fonts.regular};
`