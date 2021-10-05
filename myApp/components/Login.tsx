import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const Login = () =>{
    return(
        <View style={styles.formView}>
            <Text>Login</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    formView: {
        flex: 10,
        backgroundColor: "yellow",
    }
  })
export default Login