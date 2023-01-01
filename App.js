import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar } from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import BottomNav from "./src/Navigations/BottomNav";

import React, {useState, useEffect} from 'react';
import firebase from "firebase/compat";
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

        //firebase funktion der holde øjemed om brugeren er logget und og hvis ikke smider brugeren ud
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

  //useeffekt holder øje med om brugeren er logget ind
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
        {/*login siden er ligesom vores start side*/}
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Stack screen bruger vi til at kunne swipe mellem siderne og ud fra appen/bottomNav */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Bottom" component={BottomNav}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
   
    
)
}
return GuestPage()

}