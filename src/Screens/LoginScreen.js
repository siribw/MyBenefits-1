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
    //Vi bruge useState hooks til at sætte react værdier i funktionerne på siden
    //De holder på værdierne vi sætter 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

     //vi skaber en knap der håndterer når vi submitter et sign in 
        //kører funktionen handlesubmit
        //den loades under inputfelterne i view
    const renderButton = () => {
        return <Button style= {Globalstyles.button} onPress={() => handleSubmit() } title="Login" />;
    };


    //handleSubmit er en asynk. funktion der skal bruger firebase funktion til at signe en bruger ind
    //hvis ikke det lykkedes sender den en fejlmeddelse
    const handleSubmit = async () => {
        navigation.navigate("Bottom")
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            });

        } catch (error){
            setErrorMessage(error.message)
        }
    }

    
    
    //view består af to inputfelter til email og psw som bruges til handlesubmit
    //under den er en knap til registerScreen hvor man kan oprette en bruger hvis man ikke har en
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


//Eksporterer komponent
export default LoginScreen
