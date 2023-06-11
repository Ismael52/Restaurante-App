import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
    lblMenu: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgba(247, 164, 0, 1)',
    },
    body: {
        alignItems: 'center',
        backgroundColor: 'rgba(250, 199, 107, 0.4)',
        height: 500,
        
    },
    imageContainer: {
        
        height: '50%',
        width: '80%',
    },
    imageMenu: {
        height: '100%',
        width: '100%'
    },
    lbltitleTipoComida: {
        textAlign: 'center'
    },
    lblTipococina: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(247, 164, 0, 1)',
    },
    /*CENTRO PRECIO */
    leceriContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomWidth: 4,
        borderBottomColor: 'orange',
    },
    /*IZQ MENU */
    leftContainer: {
        width: '60%',
        height: 37,
        
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    lblMenuEleccion: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    /*CENTRO PRECIO */
    centerContainer: {
        width: '20%',
        height: 37,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    lblprecioMenu: {
        backgroundColor: 'orange',
        color: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    /*DERECHA PRECIO */
    rightContainer: {
        width: '10%',
        height: 37,
        
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    lblPrecio: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    rightContainer2: {
        width: '10%',
        height: 37,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    lblPrecioBS: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    enpoproContainer: {
        flexDirection: 'row',
    },
    columnLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    columnRight:{
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default menuStyles;