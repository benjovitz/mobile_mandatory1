import React from "react";
import { TextInput , View, Button } from "react-native";

import { app, database, storage } from './firebase.jsx';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore"
import { useState } from 'react';
import styles from '../assets/styles.jsx';

export default SignUp = ({navigation}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (
        <View>
            <TextInput onChangeText={(txt) => setUsername(txt)} placeholder="username"></TextInput>
            <TextInput onChangeText={(txt) => setPassword(txt)} placeholder="password"></TextInput>
            <Button title="sign up" onPress={() => {
                createNewUser(username, password)
                navigation.goBack()
            }}></Button>
        </View>
    )
}

async function createNewUser(username, password){
        try{
            await addDoc(collection(database, "signIn"),{
                username: username,
                password: password
            })
        } catch (err) {
            console.log("error", err)
        }
}