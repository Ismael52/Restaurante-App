import { StyleSheet } from 'react-native';
import {Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');



const HomeStyles = StyleSheet.create({
    /*contenido de la pantalla*/
    content: {
        alignItems: 'center',
        
    },
    contentCarrusel:{
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height:300
    },
    image: {
        width: width,
        height: 300,
        resizeMode: 'cover',
    },
    view: {
        marginTop: 30,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: 80,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        opacity: 0.8,
    },
    viewText: {
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        zIndex: 1,
    },

});


export default HomeStyles;