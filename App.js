import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Resume from './components/resume'
import Form from './components/form'
// import Skill from './components/skill'
import Project from './components/projects'
import ImageUpload from './components/imageUpload'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Form/> */}
      {/* <Project/> */}
      <ImageUpload/>
      {/* <Resume/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
