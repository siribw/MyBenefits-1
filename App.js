import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar } from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import BottomNav from "./src/Navigations/BottomNav";
import Fashion from './src/Components/Categories/Fashion'
import Health from './src/Components/Categories/Health'


import React, {useState, useEffect} from 'react';
import firebase from "firebase/compat";
import HomeScreen from './src/Screens/HomeScreen'
import Globalstyles from "./src/Globalstyle";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD5Iy59pgvWkhEEn0ut6wGFXvuwnWRwr0",
  authDomain: "innovation-cbs.firebaseapp.com",
  projectId: "innovation-cbs",
  storageBucket: "innovation-cbs.appspot.com",
  messagingSenderId: "861858962246",
  appId: "1:861858962246:web:ef64275971446e3e9ce347"
};

export default function App() {

    //Opretter bruger state variablen
    const [user, setUser] = useState({ loggedIn: false });

    //Hvis vi ikke allerede har én Firebase, initieres et instans af Firebase appen ved brug af appen.
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }

    //Firebase-metoden, onAuthstatechanged, observerer hvorvidt brugeren er logget ind eller ud
    //Pba. brugerens status foretages et callback med setUSer metoden, som håndterer user-state variablens status.
        function onAuthStateChange(callback) {
            return firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback({loggedIn: true, user: user});
            } else {
                callback({loggedIn: false}

                );
            }
        });
    }

  //Med useEffect-hooket begynder vi at lytte til ændringer i auth state
  //På den måde kan vi se om brugeren er aktiv. 
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, [])



const Stack = createNativeStackNavigator();
const GuestPage = () => {
  return(
   
    <NativeBaseProvider style={Globalstyles.container}>
      <NavigationContainer >
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
   
    
)
}
return GuestPage()

}