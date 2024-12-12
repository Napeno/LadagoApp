import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Confirm = () => {
  return (
    <View style={[styles.root]} >
      <Text>Confirm</Text>
    </View>
  )
}

export default Confirm

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  }
})