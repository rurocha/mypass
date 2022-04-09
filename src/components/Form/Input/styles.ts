import styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import { TypePositionIcon } from '.'

interface IProps {
  positionIcon: TypePositionIcon
}

export const Container = styled.View`
  position: relative;
  justify-content: center;
`
export const Input = styled.TextInput<IProps>`
  background-color: #f5f5f5;
  padding: ${props => props.positionIcon === 'left' ? '12px 48px' : '12px'};
  border-radius: 8px;
`
export const Icon = styled(Feather)<IProps>`
  font-size: 22px;
  position: absolute;
  bottom: 25%;
  ${props => `
    ${props.positionIcon === 'left' ? 'left: 12px' : 'right: 12px'};
  `}
`
export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 6px;
`