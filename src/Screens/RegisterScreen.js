import React, {useState} from 'react';
import {Button,
    Text,
    View,
    TextInput
} from 'react-native';

//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import GlobalGlobalstyles from '../Globalstyle';
import Globalstyles from '../Globalstyle';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD5Iy59pgvWkhEEn0ut6wGFXvuwnWRwr0",
    authDomain: "innovation-cbs.firebaseapp.com",
    projectId: "innovation-cbs",
    storageBucket: "innovation-cbs.appspot.com",
    messagingSenderId: "861858962246",
    appId: "1:861858962246:web:98c4906043fc4d2d9ce347"
  };

function RegisterScreen({navigation}) {
    //Vi bruge useState hooks til at sætte react værdier i funktionerne på siden
    //De holder på værdierne vi sætter 
    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    
    //vi skaber en knap der håndterer når vi submitter en bruger
    //kører funktionen handlesubmit
    //den loades ind nederst på siden
   
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Create user" />;
    };

    //handlesubmit funktion der har asynkron firebase funktion der opretter bruger med 
    //email og paswords
    //hvis ikke det er muligt sender den en fejl
    //hvis det lykkedes sendes tilbage til login side
   const handleSubmit = async() => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
        } );
    } catch (error){
        setErrorMessage(error.message)
    }
    try { navigation.navigate('Login')}
    catch (error){
        setErrorMessage(error.message)
    }
}

    //view viser en række inputfelter til at oprette en bruger
    //nederst er knappen til at submitte sin bruger
    //al anden info end email og psw gemmes ikke pt
    return (
        <View style= {GlobalGlobalstyles.container}>
            <Text style={GlobalGlobalstyles.header}>Sign up</Text>
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={GlobalGlobalstyles.inputField}
            />
            <TextInput
                placeholder="Last Name"
                value={LastName}
                onChangeText={(LastName) => setLastName(LastName)}
                style={Globalstyles.inputField}
            />
            <TextInput
               placeholder="email"
               value={email}
               onChangeText={(email) => setEmail(email)}
               style={GlobalGlobalstyles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={GlobalGlobalstyles.inputField}
            />
            {errorMessage && (
                <Text style={Globalstyles.error}>Error: {errorMessage}</Text>
            )}
              {renderButton()  }

        </View>
    );
}

//Eksporterer komponent
export default RegisterScreen
