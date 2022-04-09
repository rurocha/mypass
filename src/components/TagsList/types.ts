import { TouchableOpacityProps } from 'react-native'

export interface ITag {
  label: string;
  key: string;
  isChecked: boolean;
}

export interface ITagsListProps extends TouchableOpacityProps {
  tags: ITag[],
  onPress(tag: object): void
}