import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
import {View,Button, StyleSheet, } from 'react-native';
import firebase from "firebase/compat";
import { useNavigation } from "@react-navigation/native";
import Header from '../Components/Header'
import Globalstyles from "../Globalstyle";





function ProfileScreen () {
        const navigation = useNavigation();

    //Firebase-metoden, handleLogout, håndterer log ud af en bruger, der er logget ind. Asynkron funktion
    const handleLogOut = async () => {
        await firebase.auth().signOut();

    }

    //Hvis den aktive bruger ikke kan findes, fortæller vi det i et tekstkomponent
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    //I return() hentes billede af sketch til Profil-siden, 
    //og vi stiller en knap til rådighed, der kan logge brugeren ud
    return (
        < >
    <Image source = {require('../../assets/contrastlogo.png')}   
                    h = {200}
                    w = {"full"}
                    alt = 'none'
                    />
        
        <Tabs />
        <View>
        {/*<Text>Current user: {firebase.auth().currentUser.email}</Text> */}       
            <Button color = 'red' onPress={() => handleLogOut() && navigation.navigate('Login')} title="Log out" />
        </View>
      

        
        </>
    );

}



//Eksport af Loginform, således denne kan importeres og benyttes i andre komponenter
export default ProfileScreen

