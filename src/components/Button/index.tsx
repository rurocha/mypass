import React from 'react'
import {
  Btn,
  Label,
} from './styles'
import {TouchableOpacityProps} from 'react-native'

interface IProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void
}

export default function Button({
  label,
  onPress,
  ...rest
}: IProps) {
  return (
    <Btn
      onPress={onPress}
      {...rest}
    >
      <Label>{label}</Label>
    </Btn>
  )
}