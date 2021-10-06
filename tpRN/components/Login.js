import React, {useState} from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable} from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native";
import axios from 'axios';

import image from "../assets/images/img2.jpeg"
import {ConectedReducer, isConected} from "../reducers/ConectedReducer"


const Login = () =>{
    const [email, setEmail] = useState("amine.hadef.dev2@gmail.com");
    const [password, setPassword] = useState("amineaaa");
    const [isConectedStat, setIsConectedStat] = useState(isConected)

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

                <Link to="/home" onPress={()=>{
                    login(email, password)
                    setIsConectedStat(<ConectedReducer action="CONECTED"/>)
                }}>
                    <Text style={styles.txtLink}>Submit</Text>
                </Link>

                <Link to="/restpassword" style={styles.passwordForgot}>
                    <Text style={styles.txtLink}>password forgot?</Text>
                </Link>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    formView: {
        flex: 10,
    },
    txtLink:{
        color: '#39796B'
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
        fontFamily: "Monoton",
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
    },
    passwordForgot: {
        position: "absolute",
        bottom: 120,
    }
  })
export default Login