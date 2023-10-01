import { View, Text, FlatList, Button } from 'react-native';

import { app, database, storage } from './firebase.jsx';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore"
import { useState } from 'react';
import styles from '../assets/styles.jsx';


export default FitnessPlan = ({navigation, route}) => {
    const id = route.params?.id

    const [values, loading, error] = useCollection(collection(database, "fitnessPlan"))   
    const data =  values?.docs.map((doc => ({...doc.data(), id: doc.id}))).filter((plan => plan.userid === id))

    return (
        <View>
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ ...styles.card }}>
            <Text onPress={() => navigation.navigate("Edit plan", {plan: item})} style={styles.title}>Day: {item.day}</Text>
            <Text style={styles.title}>Exercises:</Text>
            {item.exercises.map((exercise, index) => (
              <View key={index}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exercise}>reps: {exercise.rep}</Text>
                <Text style={styles.exercise}>set: {exercise.set}</Text>
              </View>
            ))}
             <View style={styles.xContainer}>
          <Text onPress={() => deletePlan(item.id)} style={styles.x}>X</Text>
        </View>
          </View>
        )}
      />
      <Button title='+' onPress={() => navigation.navigate("Add plan", {userid: id})}></Button>
      </View>
    )
}

const deletePlan = async (id) => {
    console.log(id)
    await deleteDoc(doc(database, "fitnessPlan", id))
}
