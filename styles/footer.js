import { StyleSheet } from 'react-native';


const footerStyles = StyleSheet.create({
    /*FOOTER */
    footer: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,        
    },
    view: {

    },
    viewText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default footerStyles;
