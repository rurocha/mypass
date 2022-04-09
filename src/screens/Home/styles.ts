import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { IPasswordData } from '.'
import {FlatList, FlatListProps} from 'react-native'
export const Container = styled.View`
  flex: 1;
  padding: 48px 32px 32px 32px;
  background-color: ${props => props.theme.colors.background};
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
export const Logo = styled.View``
export const Avatar = styled.Image.attrs({
  // source: {
  //   uri: "https://avatars.githubusercontent.com/u/47485756?v=4"
  // },
})`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`
export const TagsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: 32px;
  flex-grow: 0;
`

export const InputContainer = styled.View`
  margin-bottom: 16px;
`
export const AddPassButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.gray_1};
  position: absolute;
  bottom: 32px;
  right: 32px;
  z-index: 1;
`
export const AddPassButtonIcon = styled(Feather)`
  font-size: 32px;
  color: ${props => props.theme.colors.neutral_light};
`
export const PasswordList = styled(
  FlatList as new (props: FlatListProps<IPasswordData>) => FlatList<IPasswordData>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`

export const PasswordCardContainer = styled.ScrollView`
  margin-bottom: 16px;
`