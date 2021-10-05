import React, {useState} from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native'

import image from "../assets/images/img1.jpeg"

const Register = () =>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [submit, onSubmit] = useState(false);
    return(
        <View style={styles.formView}>
            <ImageBackground source={image} style={styles.header}>
                <Text style={styles.fontHeader}>REGISTER</Text>
            </ImageBackground>
            <View style={styles.containerForm}>
                <TextInput style={styles.input} onChangeText={setFirstname} value={firstname} placeholder="firstname" />
                <TextInput style={styles.input} onChangeText={setLastname} value={lastname} placeholder="lastname" />
                <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="username" />
                <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="email" />
                <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="password" />
                <Button title="Submit" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    formView: {
        flex: 10,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    fontHeader: {
        fontSize: 64,
        color: "white",
        //fontFamily: "Monoton",
        fontWeight: "bold"
    },
    containerForm:{
        flex: 2,
    },
    input:{
        height: 50,
        margin: 14,
        borderWidth: 0.5,
        padding: 10,
    }
  })
export default Register