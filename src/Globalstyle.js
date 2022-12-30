
import { StyleSheet} from 'react-native';


const Globalstyles = StyleSheet.create({
    container: { 
        flex: 1,
        alignContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ffffff'
      },
      container2:{
        flex: 1,
       
        paddingTop: '5%',
        backgroundColor: '#ffffff'
      },
      container3:{
      
        backgroundColor: '#ffffff'
      },
      text:{
        fontFamily: 'Arial',
        alignSelf: 'center',
        padding: 2,
        fontSize: 20 ,
        color: 'lightgrey' 
      },
      text2:{
        fontFamily: 'Arial',
        alignSelf: 'flex-start',
        padding: 2,
        fontSize: 20 ,
      },
  
      Stackcontainer: {
        flex: 1, 
        width: '100%',
        height: '50%',
        backgroundColor: '#FFFF'
      },

    paragraph: {
      fontFamily:'Arial',
      fontSize: 30,
      paddingTop: 10,
      fontWeight: 'bold'
    },
    button: {
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: "center",

    },  
    button2: {
      fontSize: 23,
      fontWeight: "bold",
      alignSelf: "center",

    },   
    button3: {
      alignItems: 'left',
      paddingHorizontal: 5,
      margin: 5,
      borderRadius: 2,
     
      backgroundColor: '#ffffff',

    },
    error: {
        color: 'red',
    },
    inputField: {
      borderRadius: 10,
      padding: 10,
      width: 300,
      textAlign: 'center',
      borderWidth: 0,
      backgroundColor: '#dedede',
      margin: 3,
      alignSelf: 'center'


    },
      
      header: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        padding: 30},
      header2: {
          fontSize: 30,
          textAlign: 'left',
          fontWeight: 'bold',
          fontFamily: 'Arial',
          paddingTop: 30,
          padding: 2},
       header3: {
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            margin: 2,
            padding: 2,
            color: "#092E41",

       
          },
  
        logininput: {
          borderWidth: 0,
          margin: 10,
          padding: 10,
          borderRadius: 20,
          backgroundColor: '#dedede'

  }

});


export default Globalstyles;