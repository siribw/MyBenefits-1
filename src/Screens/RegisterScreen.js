import React, {useState} from 'react';
import {Button,
    Text,
    View,
    TextInput
} from 'react-native';

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    // Deklarerer ny state variable til brugerens informationer i sign up-processen samt errorMessage
    //Vi bruge useState, som er et Hook, der lader os tilføje React state til funktionskomponenter.
    // vi kan dermed bevare værdierne imellem funktionernes kørsel    
    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    //Her defineres den knap, som brugeren trykker på ved oprettelsen
    //den aktiverer handleSubmit() med onPress
   
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Create user" />;
    };


    /*Promise håndterer oprettelsen af ny bruger med firebase-metoden, createUserWithEmailAndPassword, 
    der tager mail-adresse og kodeord som argumenter. Asynkront eksekveres oprettelsen i firebase.  
    I catch sørger vi får at håntere fejl ved at sætte værdien for vores ovenstående state-variabel, errorMessage
    */
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

const handleSubmitUserdata = async() => {
    try {
        firebase
            .database()
            .ref('/users/' + userId)
            .set({ 
            FirstName: FirstName,
            LastName: LastName
            });
        Alert.alert(`Saved`);
    }catch (error){
        setErrorMessage(error.message)
    }
}

//Under teksten 'Sign up', har vi to TextInputs, der ved ændring af værdien af konstanterne, såsom email og password, 
//sender den nye værdi som argument til call back funktionen, som sætter værdien i email og password osv.
// Hvis errorMessage får fastsat en værdi, skal denne udskrives i en tekstkomponent.
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

//Eksport af SignUpForm, så den kan importeres og benyttes i andre komponenter
export default RegisterScreen
