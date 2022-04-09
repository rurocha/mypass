import React, { useEffect, useState } from 'react'
import InputForm from '../../components/Form/InputForm'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import uuid from 'react-native-uuid'
import {NavigationProp, ParamListBase} from '@react-navigation/native'
import {
  Container,
  Title,
  Form,
  InputContainer,
  InputLabel,
  Header,
  Footer,
  TagsContainer,
} from './styles'
import Btn from '../../components/Button'
import { formSchema } from './schema'
import { getAsyncStorageItem, removeAsyncStorageItem, setAsyncStorageItem } from '../../services/storage'
import { PASS_DATA_STORAGE_KEY } from '../../helpers/keys.helpers'
import TagsList from '../../components/TagsList'
import tags from '../../helpers/tags.helpers'
import { ITag } from '../../components/TagsList/types'

// TODO: RESOLVER PROBLEMA tipagem onSubmit
// export interface IPassData {
//   website: string;
//   user: string;
//   password: string;
//   notes: string;
// }

interface IProps {
  navigation: NavigationProp<ParamListBase>
}

export default function Register({ navigation }: IProps) {
  const [currentTags, setCurrentTags] = useState<ITag[]>([{key: '', label: '', isChecked: false}])
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) })

  async function onSubmit(values: object) {
    console.log(values)
    const dataToSave = {
      id: uuid.v4(),
      ...values,
      currentTags,
    }
    const loadedData = await getAsyncStorageItem(PASS_DATA_STORAGE_KEY)
    const newData = [dataToSave, ...loadedData || [] ]
    await setAsyncStorageItem(PASS_DATA_STORAGE_KEY, newData)
    navigation.navigate('home')
  }

  function handleTagsList(tags: ITag[]) {
    setCurrentTags(tags.filter(({ isChecked }) => isChecked))
  }

  // // remover todos os itens
  //  useEffect(() => {
  //    async function removeItems() {
  //      await removeAsyncStorageItem(PASS_DATA_STORAGE_KEY)
  //    }
  //    removeItems()
  //  }, [])

  // useEffect(() => {
  //   async function loadedData() {
  //     const loadedData = await getAsyncStorageItem(PASS_DATA_STORAGE_KEY)
  //     console.log('data', loadedData)
  //   }
  //   loadedData()
  // }, [])

  return (
    <Container>
      <Header>
        <Title>Cadastrar uma nova senha</Title>
      </Header>
      <Form>
        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <InputForm
            iconName="clipboard"
            positionIcon="left"
            placeholder="digite um titulo"
            name="name"
            control={control}
            errors={errors.name}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Email / Usuário</InputLabel>
          <InputForm 
            iconName="user"
            positionIcon="left"
            placeholder="digite os dados de usuário"
            name="user"
            control={control}
            errors={errors.user}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Passworld / Pin</InputLabel>
          <InputForm
            iconName="lock"
            positionIcon="left"
            placeholder="digite a senha"
            name="password"
            control={control}
            errors={errors.password}
            secureTextEntry={true}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Website</InputLabel>
          <InputForm 
            placeholder="digite o site"
            iconName="globe"
            positionIcon="left"
            name="website"
            control={control}
            errors={errors.website}
          />
        </InputContainer>
        
        <InputContainer>
          <TagsContainer>
            <TagsList
              onPress={handleTagsList}
              tags={tags}
            />
          </TagsContainer>
        </InputContainer>

      </Form>
      <Footer>
        <Btn
          onPress={handleSubmit(onSubmit)}
          label="Salvar"
        >
        </Btn>
      </Footer>
    </Container>
  )
}