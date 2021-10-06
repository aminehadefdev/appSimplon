import React, {useState} from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import {StyleSheet, Text, View} from 'react-native';
import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

import Register from "./components/Register"
import Login from "./components/Login"
import Restpassword from "./components/Restpassword"
import Home from "./components/Home"
import Profile from './components/Profile'
import Search from './components/Search'

import {ConectedReducer, isConected} from "./reducers/ConectedReducer"

const App = () => {
  
  return (
    (!isConected)?
    <NativeRouter>
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/restpassword" component={Restpassword} />
      <Route exact path="/home" component={Home} />
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.txtLink}>Register</Text>
          </Link>
          <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.txtLink}>Login</Text>
          </Link>
        </View>
      </View>
  </NativeRouter>:
  <NativeRouter>
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/search" component={Search} />

      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.txtLink}>Home</Text>
          </Link>
          <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.txtLink}>Profil</Text>
          </Link>
          <Link to="/search" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.txtLink}>Search</Text>
          </Link>
        </View>
      </View>
  </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    width: "100%",
    bottom: 10,
    position: "absolute",
  },
  txtLink:{
    color: '#39796B'
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    color: "black",
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
