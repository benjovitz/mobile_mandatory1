import { View, TextInput, Text, Button,  } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

import { app, database, storage } from './firebase.jsx';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore"
import { useState, useEffect } from 'react';
import styles from '../assets/styles.jsx';


export default EditPlan = ({route}) => {
    const userid = route.params?.userid
    console.log(userid)
    const [day, setDay] = useState()
    const [exercises, setExercises] = useState([])

    const Exercise = ({exercise, index}) => {
        return(
            <View>
                <TextInput onChangeText={(txt) => {
                    const exercise = exercises[index]
                    exercise.name = txt
                    console.log(exercises)
                }} placeholder={exercise.name}></TextInput>
                <TextInput onChangeText={(txt) => {
                    const exercise = exercises[index]
                    exercise.rep = txt
                    console.log(exercises)
                }} placeholder={exercise.rep}></TextInput>
                <TextInput onChangeText={(txt) => {
                    const exercise = exercises[index]
                    exercise.set = txt
                    console.log(exercises)
                }} placeholder={exercise.set}></TextInput>
            </View>
        )
    }

    return (
        <View>
            <TextInput placeholder="day" onChangeText={(txt) => {
                setDay(txt)
                console.log(day)
                }}></TextInput>
             {exercises.map((exercise, index) => (
             <Exercise exercise={exercise} index={index}  />
            ))}
            <Button title='add extra exercise' onPress={() => {
                const newExercise = {
                    name: "name",
                    rep: "rep",
                    set: "set",
                }
                setExercises([...exercises, newExercise])
            }}></Button>
            <Button title='Save plan' onPress={() => addNewPlan(day, exercises, userid)}></Button>
        </View>
    )
}


const addNewPlan = async (day, exercises, userid) => {
    await addDoc(collection(database, "fitnessPlan"),{
        day: day,
        userid: userid,
        exercises: exercises
    })
}