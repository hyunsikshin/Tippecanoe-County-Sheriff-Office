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
        color: '#3b3c3d',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        textDecorationLine: 'underline',
      },
    
      Cell_Title: {
        width: 0.8*width,
        height: 0.05*height,
        margin: 5,
        backgroundColor: '#bdc3c7',
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
        backgroundColor: '#f1f2f6',
        margin: -10,
        alignItems: 'center',
      },
});