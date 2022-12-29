import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from "firebase/compat";
import Globalstyles from '../Globalstyle';


/*inspiration fra https://reactnative.dev/docs/touchableopacity
* og https://www.youtube.com/watch?v=R2eqAgR_KlU*/

//Hmm bare min overskrift så overvejer bare at kode den ind under boxes for at undgå flere filer end højst nødvendigt
export default function HeaderComponent() {

    //Hvis den aktive bruger ikke kan findes, fortæller vi det i et tekstkomponent
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

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
        <Text style ={Globalstyles.text2} > Welcome {firebase.auth().currentUser.email}!</Text>
       
       
       
    </View>    )
}


