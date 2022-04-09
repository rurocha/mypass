import { View, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import React from 'react'
interface IProps extends TouchableOpacityProps {
  
}

export default function AuthenticationFailed ({onPress}: TouchableOpacityProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Autenticação falhou</Text>
      <TouchableOpacity 
        onPress={onPress}
      >
        <Text>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  )
}