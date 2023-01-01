import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {Accuracy} from "expo-location";
import {useState, useEffect} from "react";
import HeaderComponent from '../Components/Header';

//maps side 
function MapComponent() {
  //Vi bruge useState hooks til at sætte react værdier i funktionerne på siden
  //De holder på værdierne vi sætter 
  const [hasLocationPermission, setlocationPermission] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [userMarkerCoordinates, setUserMarkerCoordinates] = useState([])
  const [selectedCoordinate, setSelectedCoordinate] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState(null)

  //getLocationPermission er funktionen der spørger om tilladelse til brug af placering
  //requestForegroundPermissionsAsync sender en efterspørgsel om tilladelse til enhedens placering.
  //async Promiset fuldført hvis der er givet lov og PermissionResponse er givet
  const getLocationPermission = async () => {
    await Location.requestForegroundPermissionsAsync().then((item)=>{
      setlocationPermission(item.granted)
    } );

  };

  // useEffect kalder getlocationPermission
  // der sender en besked til brugeren og efterspørger tilladelse til at bruge enhedens lokation
  useEffect (() => {
    const response = getLocationPermission()
  });

  //getCurrentPositionAsync returnerer enhedens aktuelle position
  //Denne danne input variablen i setcurrenLocation
  //Accuracy.Balanced giver os nøjagtighed og sætter at nøjagtigheden skal være inden for 100 meter
  const updateLocation = async () => {
    await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced}).then((item)=>{
      setCurrentLocation(item.coords)
    } );
  };

  //handleLongPress gør at når man klikker på et koordinat kommer den info om stedet
  //som er sat som værdier på koordinatet
  const handleLongPress = event => {
    const coordinate = event.nativeEvent.coordinate
    setUserMarkerCoordinates((oldArray) => [...oldArray, coordinate])
  };


//ReverseGeocodeAsync omdanner koordinater til en adresse som holdes af handleSelectMarker
//Vi bruger state til at setSelectedCoordinate, med coordinates til at sætte cordinat
  const handleSelectMarker = async coordinate =>{
    setSelectedCoordinate(coordinate)
    await Location.reverseGeocodeAsync(coordinate).then((data) => {
          setSelectedAddress(data)
        }
    )
  };


  //closeInfoBox sætter værdierne fra selectedAddress og selectedCoordinate til at være nul
  const closeInfoBox = () =>
      setSelectedCoordinate(null) && setSelectedAddress(null)

    // RenderCurrentLocation loader enhedens lokation og hvis der ikke er en sendes en tekst
    //om at der ikke er givet tilladelse 
  const RenderCurrentLocation = (props) => {
    if (props.hasLocationPermission === null) {
      return null;
    }
    if (props.hasLocationPermission === false) {
      return <Text>No location access. Go to settings to change</Text>;
    }
    return (
        <View>
        
          <Button style title="update location" onPress={updateLocation} />
          {currentLocation && (
              <Text>
                {`lat: ${currentLocation.latitude},\nLong:${
                    currentLocation.longitude
                }\nacc: ${currentLocation.accuracy}`}
              </Text>
          )}
        </View>
    );
  };

    //nedenstående return viser google maps med de indsatte markers / markører der er placeringer
    // på rabatudbydere.
  {
    return (
        <SafeAreaView style={styles.container}>
          <RenderCurrentLocation props={{hasLocationPermission: hasLocationPermission, currentLocation: currentLocation}} />
          <MapView
              provider="google"
              style={styles.map}
              showsUserLocation
              onLongPress={handleLongPress}>
            <Marker
                coordinate={{ latitude: 55.68068253786292, longitude: 12.530595661781504 }}
                title="SATS Falkoner"
                description="Fitnesscenter"
            />
            <Marker
                coordinate={{ latitude: 55.67844195406537, longitude: 12.564970927038036  }}
                title="Jensens Bøfhus"
                description="Restaurant"
            />
            <Marker
                coordinate={{ latitude: 55.67133484535709, longitude: 12.556983441256698}}
                title="WEDO Kødbyen"
                description="Take-away"
            />
            {userMarkerCoordinates.map((coordinate, index) => (
                <Marker
                    coordinate={coordinate}
                    key={index.toString()}
                    onPress={() => handleSelectMarker(coordinate)}
                />
            ))}
          </MapView>
          {selectedCoordinate && selectedAddress && (
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                  {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                </Text>
                <Text style={styles.infoText}>
                  name: {selectedAddress[0].name}  region: {selectedAddress[0].region}
                </Text>
                <Button title="close" onPress={closeInfoBox} />
              </View>
          )}
        </SafeAreaView>
    );
  }
}

//eksporterer komponent
export default MapComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  map: { flex: 1 },
  infoBox: {
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 15,
  },
});