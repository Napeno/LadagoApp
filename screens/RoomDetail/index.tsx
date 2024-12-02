import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
const RoomDetail = () => {
  return (
    <View style={[styles.root]}>
      <Image />
    </View>
  )
}

export default RoomDetail

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor:"white"
  }
})