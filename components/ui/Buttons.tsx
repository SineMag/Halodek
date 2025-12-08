import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type ButtonsProps = {
  name?:string,
  icon?:string,
  color?:string,
  backgroundColor?:string,
  style?:object,
}
const Buttons: React.FC<ButtonsProps> = ({name, icon, color, backgroundColor, style}) => {
  return (
    <View style={style}>
      <Text style={{color: color, backgroundColor: backgroundColor}}>{name}{icon}</Text>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({})