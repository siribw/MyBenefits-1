import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from "firebase/compat";
import Globalstyles from '../Globalstyle';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD5Iy59pgvWkhEEn0ut6wGFXvuwnWRwr0",
    authDomain: "innovation-cbs.firebaseapp.com",
    projectId: "innovation-cbs",
    storageBucket: "innovation-cbs.appspot.com",
    messagingSenderId: "861858962246",
    appId: "1:861858962246:web:ef64275971446e3e9ce347"
  };

/*inspiration fra https://reactnative.dev/docs/touchableopacity
* og https://www.youtube.com/watch?v=R2eqAgR_KlU*/

//Hmm bare min overskrift så overvejer bare at kode den ind under boxes for at undgå flere filer end højst nødvendigt
export default function HeaderComponent() {

       //Hvis vi ikke allerede har én Firebase, initieres et instans af Firebase appen ved brug af appen.
       if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }
    
    //Hvis den aktive bruger ikke kan findes, fortæller vi det i et tekstkomponent

    //I return() hentes billede af sketch til Profil-siden, 
    //og vi stiller en knap til rådighed, der kan logge brugeren ud
    return (
        <View style={Globalstyles.container}>
            <Image source = {require('../../assets/contrastlogo.png')}   style={{
            resizeMode: "cover",
            height: 100,
            width: 300,
            alignSelf: 'center',
          }}></Image>
        
       
  
       
    </View>  
      )
}//<Text style ={Globalstyles.text2} > Welcome {firebase.auth().currentUser.email}!</Text>


