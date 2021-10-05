import React, {useState} from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable} from 'react-native'

import image from "../assets/images/img2.jpeg"
import axios from 'axios';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [submit, onSubmit] = useState(false);
    function login(email, password){
        var data = JSON.stringify({
            "password": password,
            "email": email
        });

        var config = {
            method: 'post',
            url: 'https://api.pote.dev/auth/login',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
    
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
    }
    return(
        <View style={styles.formView}>
            <ImageBackground source={image} style={styles.header}>
                <Text style={styles.fontHeader}>LOGIN</Text>
            </ImageBackground>
            <View style={styles.containerForm}>
                <TextInput style={styles.inputLeft} onChangeText={setEmail} value={email} placeholder="email" textContentType="emailAddress" />
                <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="password" textContentType="password" />
                <Pressable onPress={()=>(login(email, password))}><Text>Submit</Text></Pressable>
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
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    input:{
        height: 50,
        width:"80%",
        margin: 14,
        borderWidth: 0.5,
        borderColor: "#EFEFEF",
        backgroundColor: "#EFEFEF",
        borderRadius: 5,
        padding: 10,
        marginRight: 50
    },
    inputLeft:{
        height: 50,
        width:"80%",
        borderWidth: 0.5,
        borderColor: "#EFEFEF",
        backgroundColor: "#EFEFEF",
        borderRadius: 5,
        padding: 10,
        marginLeft: 50
    }
  })
export default Login