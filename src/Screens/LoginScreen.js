import React, {useState} from 'react';
import {Button,Text,
    View,
    TextInput,
    StyleSheet,
    Pressable,
    Image
} from 'react-native';
import firebase from "firebase/compat";
import Globalstyles from '../Globalstyle';


  function LoginScreen({ navigation }) {

    // Deklarerer nye state variable, som vi kalder email, password og errorMessage
    //Vi bruge useState, som er et Hook, der lader os tilføje React state til funktionskomponenter.
    // vi kan dermed bevare værdierne imellem funktionernes kørsel
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    /*Promise håndterer login af eksisterende bruger med firebase-metoden, signInWithEmailAndPassword, 
    der tager mail-adresse og kodeord som argumenter. Asynkront eksekveres login i firebase.  
    I catch sørger vi får at håntere fejl ved at sætte værdien for vores ovenstående state-variabel, errorMessage
    */
    const handleSubmit = async () => {
        navigation.navigate("Bottom")
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            });

        } catch (error){
            setErrorMessage(error.message)
        }
    }

    //Her defineres loginknappen, som aktiverer handleSubmit med onPress
    const renderButton = () => {
        return <Button style= {Globalstyles.button} onPress={() => handleSubmit() } title="Login" />;
    };

//Under teksten 'Login', har vi to TextInputs, der ved ændring af værdien af konstanterne, email og password, 
//sender den nye værdi som argument til call back funktionen, som sætter værdien i email og password.
// Hvis errorMessage får fastsat en værdi, skal denne udskrives i en tekstkomponent.
    return (
        <View style={Globalstyles.container}>
            <Image source = {require('../../assets/contrastlogo.png')}
                style={{
                    resizeMode: "cover",
                    height: 200,
                    width: 400
                  }}
                />
            <Text style={Globalstyles.header}>Sign In</Text>
            <TextInput 
                style = {Globalstyles.logininput}
                placeholder="Email"
                value={email}
                onChangeText={(email) => setEmail(email)}
      
            />
            <TextInput
                style = {Globalstyles.logininput}
                placeholder="Password"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
  
            />
            {errorMessage && (
                <Text style={Globalstyles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        <Text style={Globalstyles.text}>Not a user?</Text>

        <Button title='Sign Up' onPress={() => navigation.navigate("Register")} style={Globalstyles.button}></Button>
        </View>
    );
}


//Eksport af Loginform, således denne kan importeres og benyttes i andre komponenter
export default LoginScreen
