import React from 'react';
import { Text, Dimensions, ScrollView, Image } from 'react-native';
import { PieChart, BarChart, LineChart } from "react-native-chart-kit";
import Globalstyles from '../Globalstyle';

//fra følgende side: https://github.com/indiespirit/react-native-chart-kit

//Adminstratorsiden/HR siden med statistik
//procenttallene er hardcodede ind i statistikkernes værdier
function AdminScreenComponent () {
    //finder skærmdimensionerne fra telefonen 
    const screenWidth = Dimensions.get("window").width;

    //trækker 5% fra da dette var den bedste metode til at sætte margin på graferne
    //uden at de blev skæve eller asymmetriske
    const altScreenWidt = screenWidth - (screenWidth*0.05);

    return(
            <ScrollView style={Globalstyles.container2}>
                {/*Logo */}
                <Image source = {require('../../assets/contrastlogo.png')}   style={{
                    resizeMode: "cover",
                    height: 200,
                    width: 300,
                    alignSelf: 'center',
                    }}>
                </Image>

                <Text style={Globalstyles.header3}>Most used category</Text>
                <PieChart 
                    //Cirkeldiagram viser hvilke kategorier der er brugt mest af
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
                              color: (opacity = 1) => `rgb(0, 119, 182)`, //farve props RGB
                              strokeWidth: 2,
                              useShadowColorFromDataset: false,
                          }}
                        
                          bezier //bruges til at lave buede kanter rundt om grafen og placere den pænt
                           style={{
                            paddingLeft: 10,
                             marginVertical: 8,
                             borderRadius: 30,
                             position: 'relative'
                           }}
                          absolute
                />

                <Text style={Globalstyles.header3}>Users on MyBenefits</Text>
                <LineChart 
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
                           
                           width={altScreenWidt} // from react-native
                           height={200}
                           chartConfig={{
                                backgroundColor: '#FFFFFF',
                                backgroundGradientFrom: '#C4E6F7',
                                backgroundGradientTo: '#166D99',
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `#FFFFFF`,
                            }} bezier //bruges til at lave buede kanter rundt om grafen og placere den pænt
                             style={{
                             paddingLeft: 10,
                             marginVertical: 8,
                             borderRadius: 20
                            }}absolute

                />
                 <Text style={Globalstyles.header3}>Månedens mest benyttede samarbejdspartnere, pr. medarbejder</Text>
                 <BarChart 
                   //Bar Chart hvilken tilbyder af rabat der udnyttes mest
                          data={{
                           
                              labels: ["Zalando", "Tryg.", "Danica", "Matas", "Illum"],
                              datasets: [
                                  {
                                      data: [84, 107, 10, 25, 55]
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
                               color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                           }} bezier //bruges til at lave buede kanter rundt om grafen og placere den pænt
                           style={{
                            paddingLeft: 10,
                            marginVertical: 8,
                            borderRadius: 20}}
                           absolute
                              
                              
               />



            </ScrollView>
    )
}
//eksporterer komponent
export default AdminScreenComponent;




