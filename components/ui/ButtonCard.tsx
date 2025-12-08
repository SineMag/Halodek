import { StyleSheet, Text, View} from 'react-native'
import React from 'react';
import Buttons from '@/components/ui/Buttons';



const ButtonCard = () => {
  return (
    <View style={styles.container}>
      <Buttons
        name="Chat"
        backgroundColor='orange'
        color='white'
        style={styles.button}
      />
      <Buttons
        name="Status"
        backgroundColor='orange'
        color='white'
        style={styles.button}
      />
      <Buttons
        name="Calls"
        backgroundColor='orange'
        color='white'
        style={styles.button}
      />
    </View>
  )
}

export default ButtonCard

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})