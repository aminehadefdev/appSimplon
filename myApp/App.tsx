import React, { useState } from 'react'
import {View, StyleSheet} from 'react-native'

import Register from './components/Register'
import Login from "./components/Login"
import Nav from "./components/Nav"

const App = () => {
  var navigation = [<Register></Register>, <Login></Login>]
  const [index, setIndex] = useState(0)
  return (
    <View style={styles.screen}>
      {navigation[index]}
      <Nav setIndex={setIndex}></Nav>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
export default App
