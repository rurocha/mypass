import { Text } from 'react-native'
import React from 'react'
import { Modalize } from 'react-native-modalize'

interface IProps {
  modalDetailsRef: any
  data: {
    name: string;
  }
} 

export default function PasswordDetailsModal({ modalDetailsRef, data }: IProps) {

  return (
    <Modalize 
    ref={modalDetailsRef}
    modalHeight={600}
  >
    <Text>...your content</Text>
    <Text>{data.name}</Text>
  </Modalize>
  )
}