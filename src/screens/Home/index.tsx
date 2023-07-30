import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import { Modalize } from 'react-native-modalize'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import {
  Container,
  Header,
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
import PasswordDetailsModal from '../../components/PasswordDetailsModal'
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
  const [passwordDataItem, setPasswordDataItem] = useState({} as IPasswordData)
  const modalDetailsRef = useRef<Modalize>(null)

  const onOpenModalDetails = (data: IPasswordData) => {
    setPasswordDataItem(data)
    modalDetailsRef.current?.open()
  }
 
  const memoFilteredPasswordData = useMemo(() => {
    return passwordData
      .filter((item) => item.name.includes(textInputed.toLowerCase()))
      // .filter((item) => item.currentTags.some(({key}) => keysSelectedTags.includes(key)))
      
  }, [textInputed, passwordData, selectedTags])
  
  const getStorageData = async () => {
    try {
      const dataStorage = await AsyncStorage.getItem(PASS_DATA_STORAGE_KEY)
      const data = dataStorage ? JSON.parse(dataStorage) : []
      setPasswordData(data)
    } catch(e) {
      Alert.alert('Erro ao coletar os dados')
    }
  }
    
  useFocusEffect(useCallback(() => {
    getStorageData()
  }, []))

  useEffect(() => {
    getStorageData()
  }, [])

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
              onPress={() => onOpenModalDetails(item)}
            />
          </PasswordCardContainer>
        )}
        >
      </PasswordList>
      <AddPassButton
        onPress={() => navigation.navigate('register')}
      >
        <AddPassButtonIcon name="plus" />
      </AddPassButton>
      <PasswordDetailsModal
        data={passwordDataItem}
        modalDetailsRef={modalDetailsRef}
      />
    </Container>
  )
}