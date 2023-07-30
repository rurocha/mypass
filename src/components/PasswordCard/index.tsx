import React, { useState } from 'react'
import * as Clipboard from 'expo-clipboard';
import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Content,
  UserText,
  PasswordText,
  WebsiteIcon,
  PasswordContainer,
  ButtonView,
  ButtonViewIcon,
  ButtonCopy,
  ButtonCopyIcon,
  Actions,
  ButtonOptions,
  ButtonOptionsIcon,
  NameText,
  TextsContainer,
} from './styles'

interface IProps extends TouchableOpacityProps {
  name: string;
  user: string;
  password: string;
  website: string;
  onPress: () => void
}

export default function PasswordCard ({
  name,
  user,
  password,
  website,
  onPress,
}: IProps) {
 const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <Container
      onPress={onPress}
    >
      <Content>
        <WebsiteIcon source={{uri: `https://icon.horse/icon/${website}`}} />
        <TextsContainer>
          <NameText>{name}</NameText>
          <UserText>{user}</UserText>
          <PasswordContainer>
            <PasswordText>{!isPasswordVisible ? "*************" : password}</PasswordText>
            <ButtonView 
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <ButtonViewIcon 
                name={!isPasswordVisible ? "eye" : "eye-off"}
              />
            </ButtonView>
            <ButtonCopy
              onPress={() => Clipboard.setString(password) }
            >
              <ButtonCopyIcon name="copy"/>
            </ButtonCopy>
          </PasswordContainer>
        </TextsContainer>
      </Content>
      <Actions>
        <ButtonOptions>
          <ButtonOptionsIcon name="more-vertical"/>
        </ButtonOptions>
      </Actions>
    </Container>
  )
}