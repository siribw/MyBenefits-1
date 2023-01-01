import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
import {View,Button, StyleSheet, } from 'react-native';
import firebase from "firebase/compat";
import { useNavigation } from "@react-navigation/native";





function ProfileScreen () {
        const navigation = useNavigation();

    //logout funktion som er lavet med prædefineret firebase funktion
    const handleLogOut = async () => {
        await firebase.auth().signOut();

    }

    //Hvis den aktive bruger ikke kan findes skrives en tekst
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    //i return loades profil ind som en tab der hentes i tabs komponenten
    //nederst er log ud knappen
    return (
        < >
    <Image source = {require('../../assets/contrastlogo.png')}   
                    h = {200}
                    w = {"full"}
                    alt = 'none'
                    />
        
        <Tabs />
        <View>   
            <Button color = 'red' onPress={() => handleLogOut() && navigation.navigate('Login')} title="Log out" />
        </View>
      

        
        </>
    );

}



//Eksport af komponent
export default ProfileScreen

