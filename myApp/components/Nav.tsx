import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native'

const Nav = ({setIndex}) =>{
    return(
        <View style={styles.nav}>
            <Pressable style={styles.btn} onPress={()=>{
                setIndex(0)
            }}><Text style={styles.fontBtn}>REGISTER</Text></Pressable>
            <Pressable style={styles.btnAndBorder} onPress={()=>{
                setIndex(1)
            }}><Text style={styles.fontBtn}>LOGIN</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        width: "100%",
        height: 80,
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
    },
    btn: {
        backgroundColor: "#39796B",
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    btnAndBorder:{
        backgroundColor: "#39796B",
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderLeftColor: "white",
        borderLeftWidth: 0.5,
    },
    fontBtn: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
  })

export default Nav