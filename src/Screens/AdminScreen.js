import React from 'react';
import {StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { LineChart, PieChart, ContributionGraph, StackedBarChart, BarChart }
    from "react-native-chart-kit";

import Header from '../Components/Header';
import Globalstyles from '../Globalstyle';

//fra følgende side: https://github.com/indiespirit/react-native-chart-kit

//Det her er adminstratorsiden
function AdminScreenComponent () {
    const screenWidth = Dimensions.get("window").width;
    const altScreenWidt = screenWidth - (screenWidth*0.05);
    return(
            <ScrollView style={Globalstyles.container2}>
                <Image source = {require('../../assets/contrastlogo.png')}   style={{
                    resizeMode: "cover",
                    height: 200,
                    width: 300,
                    alignSelf: 'center',
                    }}>
                </Image>

                <Text style={Globalstyles.header3}>Most used category</Text>
                <PieChart 
                    //Piechart viser hvilke kategorier der er brugt mest af
                          data={[
                              {
                                  name: "% Insurance ",
                                  population: 20,
                                  color: "#4FB4E6",
                                  legendFontColor: "#FFFFFF",
                                  legendFontSize: 15,
                              },
                              {
                                  name: "% Home",
                                  population: 10,
                                  color: "#6CC0EA",
                                  legendFontColor: "#FFFFFF",
                                  legendFontSize: 15
                              },
                              {
                                  name: "% Fashion",
                                  population: 17,
                                  color: "#8ACDEE",
                                  legendFontColor: "#FFFFFF",
                                  legendFontSize: 15
                              },
                              {
                                  name: "% Events",
                                  population: 38,
                                  color: "#A7D9F2",
                                  legendFontColor: "#FFFFFF",
                                  legendFontSize: 15
                              }
                          ]
                          }
                          width={altScreenWidt} // from react-native
                          height={200}
                          accessor={"population"}
                          backgroundColor={"#166D99"}
                          
                      
                          center={[20, 1]}
                          chartConfig={{
                              color: (opacity = 1) => `rgb(0, 119, 182)`,
                              strokeWidth: 2,
                              useShadowColorFromDataset: false,
                             
                          }}
                          bezier
                           style={{
                            paddingLeft: 10,
                             marginVertical: 8,
                             borderRadius: 30,
                             position: 'relative'
                           }}
                          absolute
                />

                <Text style={Globalstyles.header3}>Users on MyBenefits</Text>
                <BarChart 
                    //Line Chart viser hvor mange brugere der bruger appen pr. måned
                           data={{
                               //dette er labels for x aksen - så vores måneder - lav i juni alle er på sommerferie, høj i dececmber alle køber julegaver og gode fredagsbarer
                               labels: ["DEC", "JAN.", "FEB", "MAR", "APR", "MAY", "JUN"],
                               datasets: [
                                   {
                                       data: [114, 98, 67, 77, 82, 78, 22]
                                   }
                               ]
                           }}
                           withVerticalLabels ={true}
                           fromZero ={true} 
                           width={altScreenWidt} // from react-native
                           height={200}
                           chartConfig={{
                                backgroundColor: '#FFFFFF',
                                backgroundGradientFrom: '#C4E6F7',
                                backgroundGradientTo: '#166D99',
                               decimalPlaces: 0, // optional, defaults to 2dp
                               color: (opacity = 1) => `#FFFFFF`,
                               
                              

                           }} bezier
                           style={{
                             paddingLeft: 10,
                             marginVertical: 8,
                             borderRadius: 20
                           }}absolute
                    //bezier laver linjerne kurvet
            
                />



            </ScrollView>
    )
}

export default AdminScreenComponent;




