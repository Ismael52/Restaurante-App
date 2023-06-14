import { StyleSheet } from "react-native";

const historialStyles = StyleSheet.create({
    body: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    lblHistorial: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgba(247, 164, 0, 1)',
    },
    tituloHistorial: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(247, 164, 0, 1)',
    },
    titulo: {
        fontSize: 10,
        alignItems: 'center'
    },
    subTitulo: {
        alignItems: 'center'
    },
    historialContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'orange',
        borderWidth: 3,
        borderRadius: 10,
        height: 100,
        width: 412,
        justifyContent: 'center',

    },
    column1: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    column2: {
        marginLeft:10,
        width: 150,
        justifyContent: 'center',

    },
    column3: {
        width: 100,
        alignItems: 'center',

    },
    image: {
        width: 145,
        height: 95,
        borderRadius: 10
    },
    view1: {
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    view2: {
        flexDirection: 'row',
        marginBottom: 5,

    },
    view3: {
        flexDirection: 'row',
        marginBottom: 5,

    },
    view4: {
        flexDirection: 'row',

    },
    view5: {
        marginTop: 10,
        marginBottom: 10,
    },
    touch1: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginBottom: 10,
        marginTop:15,

    },
    touch2: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,

    },
    lbltipoCocina: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    lblfecha: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    lblAsientos: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    lblHora: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    text5: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text6: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    text7: {
        color: 'white',
        fontSize: 12,
    },
    footer: {
        alignSelf: 'flex-',
        backgroundColor: 'yellow'
    },
});

export default historialStyles;