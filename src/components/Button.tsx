import React from "react"
import {
    TouchableOpacity,
    Text,
    ActivityIndicator
  } from 'react-native';

interface props {
  text: string
  onPress: () => void
  buttonStyle?: object,
  loading?: boolean,
  disabled?: boolean
}
const DefaultButton: React.FC<props> = ({ text, onPress, buttonStyle, loading, disabled}) => {
  const bg = disabled ? {backgroundColor:'gray'} : null
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[buttonStyle, bg]}>
        <Text style={{color: '#FFF', fontSize: 20}}>{text}</Text>
        {loading && <ActivityIndicator/>}
    </TouchableOpacity>
  )
}

export default DefaultButton