import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    loginInput: {
      height: 50,
      borderColor: "black",
      borderWidth: 2,
      minWidth: 100,
      borderRadius: 10
    },
    card: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      margin: 10,
    },
    title: {
      fontSize: 18,
      marginBottom: 10,
      color: '#fff',
    },
    exercise: {
      fontSize: 14,
      marginBottom: 5,
      color: '#fff',
    },
    exerciseName: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
      color: '#fff',
    },
  xContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red', // Adjust the background color of the X container
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  x: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  });