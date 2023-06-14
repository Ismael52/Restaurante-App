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
        height: 425,

    },
    imageContainer: {

        height: '40%',
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
    /*aqui esta la fecha y las entradas */
    enpopriContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 330,
        borderTopWidth: 4,
        borderTopColor: 'orange',
    },
    columnLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    columnRight: {
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    lblEntrada: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    lblPostre: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    lblPrincipal: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    ingresoContainer: {
        marginBottom: 0,
        backgroundColor: 'orange',
        paddingHorizontal: 10,
        paddingVertical: 3,
        flexDirection: 'row',

    },
    lblIngreso: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    lblIngreso2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    lblFecha: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    btnReservarcontainer:{
        paddingRight:50,
        paddingLeft:50,
    },
    btnReservar: {
        backgroundColor: 'orange',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

export default menuStyles;