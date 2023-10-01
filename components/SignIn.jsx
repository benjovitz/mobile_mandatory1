import { TextInput, Button, SafeAreaView } from 'react-native';

import { app, database, storage } from './firebase.jsx';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore"
import { useEffect, useState } from 'react';
import styles from '../assets/styles.jsx';


export default SignIn = ({navigation}) => {
    const [values, loading, error] = useCollection(collection(database, "signIn"))
    const data = values?.docs.map((doc => ({...doc.data(), id: doc.id})))
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [id, setId] = useState()
  
        const signInCheck = () => {
          const user = data.find(user => user.username === username)
          setId(user.id)
          let res
          user ? user.password === password ? res = true : res = false : console.log("no user found") 
          return res
        }
        
        return (
            <SafeAreaView style = {styles.loginContainer}>
            <TextInput onChangeText={(txt) => setUsername(txt)} style = {styles.loginInput} placeholder='username'></TextInput>
            <TextInput onChangeText={(txt) => setPassword(txt)} style = {styles.loginInput} placeholder='password' secureTextEntry={true}></TextInput>
            <Button title='sign in' onPress={() => {
              if(signInCheck()){
                navigation.navigate("Your Fitness Plan", {id: id})
              }
            }}></Button>
            <Button title='Sign Up' onPress={()=> navigation.navigate("SignUp")}></Button>
            </SafeAreaView>
        )
  }
