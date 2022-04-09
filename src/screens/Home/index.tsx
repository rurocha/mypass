import React, { useEffect, useState, useRef, useMemo } from 'react'
import {
  Container,
  Header,
  Avatar,
  TagsContainer,
  InputContainer,
  AddPassButton,
  AddPassButtonIcon,
  PasswordList,
  PasswordCardContainer,
} from './styles'
import Logo from '../../assets/icons/logo.svg'
import Input from '../../components/Form/Input'
import TagsList from '../../components/TagsList'
import tags from '../../helpers/tags.helpers'
import { ITag } from '../../components/TagsList/types'
import {NavigationProp, ParamListBase, useFocusEffect} from '@react-navigation/native'
import PasswordCard from '../../components/PasswordCard'
import { getAsyncStorageItem } from '../../services/storage'
import { PASS_DATA_STORAGE_KEY } from '../../helpers/keys.helpers'
import { Modalize } from 'react-native-modalize'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native-svg'

interface IProps {
  navigation: NavigationProp<ParamListBase>
}

export interface IPasswordData {
  name: string;
  website: string;
  id: string;
  user: string;
  password: string;
  currentTags: Array<ITag>
}

export default function Home({ navigation }: IProps) {

  const [textInputed, setTextInputed] = useState('')
  const [selectedTags, setSelectedTags] = useState<ITag[]>([{key: '', label: '', isChecked: false}])
  const [passwordData, setPasswordData] = useState<IPasswordData[]>([])
  const modalDetailsRef = useRef<Modalize>(null)


  const filteredPasswordData = () => {
    return passwordData
      // .filter((item) => item.name.includes(textInputed))
      .filter((item) => item.currentTags.some((tag) => selectedTags.some((selected) => selected.key === tag.key)))
  }

  const memoFilteredPasswordData = useMemo(() => filteredPasswordData(), [textInputed])

  const onOpenModalDetails = () => {
    modalDetailsRef.current?.open()
  }

  useEffect(() => {
    console.log(memoFilteredPasswordData)
  }, [selectedTags])

  useFocusEffect(() => {
    async function loadedData() {
      const loadedData = await getAsyncStorageItem(PASS_DATA_STORAGE_KEY)
      setPasswordData(loadedData)
    }
    loadedData()
  })

  return (
    <Container>
      <Header>
        <Logo height="64"/>
      </Header>
      <InputContainer>        
        <Input 
          iconName="search"
          positionIcon="right"
          value={textInputed}
          onChangeText={setTextInputed} 
          placeholder="Search"
        />
      </InputContainer>
      <TagsContainer>
        <TagsList
          onPress={setSelectedTags}
          tags={tags}
        />
      </TagsContainer>

      <PasswordList
        keyExtractor={(item) => item.id}
        data={memoFilteredPasswordData}
        renderItem={({item}) => (
          <PasswordCardContainer>
            <PasswordCard 
              name={item.name}
              user={item.user}
              password={item.password}
              website={item.website}
            />
          </PasswordCardContainer>
        )}
        >
      </PasswordList>
      <TouchableOpacity onPress={onOpenModalDetails}><Text>Open</Text></TouchableOpacity>
      <Modalize ref={modalDetailsRef}>...your content</Modalize>
      <AddPassButton
        onPress={() => navigation.navigate('register')}
      >
        <AddPassButtonIcon name="plus" />
      </AddPassButton>
    </Container>
  )
}