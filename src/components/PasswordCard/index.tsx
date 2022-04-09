import React, { useState } from 'react'
import * as Clipboard from 'expo-clipboard';
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

interface IProps {
  name: string;
  user: string;
  password: string;
  website: string;
}

export default function PasswordCard ({
  name,
  user,
  password,
  website,
}: IProps) {
 const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <Container>
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