import React, {useState} from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable} from 'react-native'
import axios from 'axios';

import image3 from "../assets/images/img3.jpeg"

const Restpassword = () => {
    const [email,setEmail] = useState("")
    function resetpassword(email){
        var data = JSON.stringify({
            "email": email
        });

        var config = {
            method: 'post',
            url: 'https://api.pote.dev/auth/forgot_password',
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
            <ImageBackground source={image3} style={styles.header}>
                <Text style={styles.fontHeader}>FORGOT PASSWORD</Text>
            </ImageBackground>
            <View style={styles.containerForm}>
                <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="email" textContentType="emailAddress" />
                <Pressable onPress={()=>(resetpassword(email))}><Text>Submit</Text></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formView: {
        flex: 1,
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
        fontWeight: "bold",
        textAlign: 'center'
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
export default Restpassword