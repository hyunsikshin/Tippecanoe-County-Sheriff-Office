import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default StyleSheet.create({
    TitleText: {
        textAlignVertical: "center",
        textAlign: "center",
        color: 'white',
        alignItems: 'center',
        fontSize:0.05*width,
        padding: 5,
      },
    
      InnerText_close: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:0.05*width,
        marginBottom: 10,
      },
    
      InnerText: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:0.05*width,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
        textDecorationLine: 'underline',
      },
    
      Cell_Title: {
        width: 0.8*width,
        height: 0.05*height,
        margin: 5,
        backgroundColor: '#55330E',
        alignItems: 'center',
        marginBottom: 5,
      },
    
      Cell_Close: {
        width: 0.3*width,
        height: 0.05*height,
        marginVertical: 10,
        padding: 5,
        backgroundColor: '#D6D8D7',
      },
      modalBackgroundStyle: {
        backgroundColor: 'rgba(78,62,46, 1)',
        margin: -10,
        alignItems: 'center',
      },
});