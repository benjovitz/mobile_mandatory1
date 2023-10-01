import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; // npm install @react-navigation/native
import {createNativeStackNavigator} from '@react-navigation/native-stack'; // npm install @react-navigation/native-stack

import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import FitnessPlan from './components/FitnessPlan.jsx';
import EditPlan from './components/EditPlan.jsx';
import AddPlan from './components/AddPlan.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen
        name='Sign in'
        component={SignIn}
      />
       <Stack.Screen
        name='Your Fitness Plan'
        component={FitnessPlan}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
      />
      <Stack.Screen
        name='Edit plan'
        component={EditPlan}
      />
      <Stack.Screen
        name='Add plan'
        component={AddPlan}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
} 