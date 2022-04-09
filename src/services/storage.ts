import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const setAsyncStorageItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    Alert.alert('Erro ao salvar')
  }
}

export const getAsyncStorageItem = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key)
    return JSON.parse(data || '')
  } catch(e) {
    Alert.alert('Erro ao coletar os dados')
  }
}

export const removeAsyncStorageItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    Alert.alert('Erro ao remover os itens')
  }
}