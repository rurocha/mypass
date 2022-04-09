import React from 'react'
import Input, { TypePositionIcon } from '../Input'
import { Controller, Control } from "react-hook-form"
import { TextInputProps } from 'react-native';

interface IProps extends TextInputProps {
  name: string;
  control: Control;
  iconName: string;
  positionIcon: TypePositionIcon;
  errors: {message: string};
}
export default function InputForm({
  placeholder,
  name,
  control,
  iconName,
  positionIcon,
  errors,
  ...rest
}: IProps) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
        <Input
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          iconName={iconName}
          positionIcon={positionIcon}
          errorMessage={errors?.message}
          {...rest}
        />
      )}
      name={name}
    />
  </>
  )
}
