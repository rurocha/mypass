import React, { useEffect } from 'react'
import { TextInputProps } from 'react-native'
import {
  Input as InputComponent,
  Icon,
  Container,
  ErrorMessage,
  } from './styles'

export type TypePositionIcon = 'right' | 'left';

interface IProps extends TextInputProps {
  positionIcon: TypePositionIcon;
  iconName: string;
  errorMessage?: string | undefined;
  secureTextEntry?: boolean;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  iconName,
  positionIcon,
  errorMessage,
  secureTextEntry,
}: IProps) {
  return (
    <>
      <Container>
        <InputComponent
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          positionIcon={positionIcon}
          secureTextEntry={secureTextEntry}
          />
        <Icon positionIcon={positionIcon} name={iconName} />
      </Container>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  )
}