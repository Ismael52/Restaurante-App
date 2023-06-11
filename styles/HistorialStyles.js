import { StyleSheet } from "react-native";

const historialStyles = StyleSheet.create({
    titulo: {
        backgroundColor: 'pink',
        fontSize: 10,
        alignItems: 'center'
    },
    subTitulo: {
        backgroundColor: 'red',
        alignItems: 'center'
    },
    listaVigentes: {
        alignItems: 'center'
    },
    cuadroVigente: {
        backgroundColor: 'gray',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    viewImagen: {
        backgroundColor: 'red',

    },
    viewDescripcion: {
        backgroundColor: 'yellow',
    },
    cuadroDescripcion: {
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    viewBotones: {
        backgroundColor: 'pink',

    },
    footer: {
        alignSelf: 'flex-',
        backgroundColor: 'yellow'
    },
});

export default historialStyles;