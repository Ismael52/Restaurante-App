import { StyleSheet } from "react-native";

const reservaStyles = StyleSheet.create({
    /*********************** BODY */
    body: {
        backgroundColor: 'rgba(250, 199, 107, 0.4)',
        height: 400,
        marginBottom: 70,
        borderRadius: 30,

    },
    bodyTop: {
        flex: 0.2,
    },
    lblReserva: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgba(247, 164, 0, 1)',
    },
    bodyCenter: {
        marginTop: 50,
        height: 300,
    },
    bdc_NomCom: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 1,
        marginBottom: 10,
        paddingRight: 15,
        paddingLeft: 15,
    },
    lbltextos: {
        fontWeight: 'bold',
        marginBottom: 3,
    },
    txtnombre: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    /*Hora fecha Asientos */
    bdc_HoFeAs: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    columnLeft: {
        
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 18
    },
    listHoras: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
    },
    picker: {
        height: 30,
        fontSize: 14,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: 'orange',
        paddingLeft: 10,
        marginBottom: 5,
        marginRight: 5,
    },
    columnCenter: {
        
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 18
    },
    pickerFecha1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    pickerLabel: {
        fontSize: 10,
        marginRight: 5,
    },
    dias: {
        width: 50,
        height: 30,
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',

        marginBottom: 5,
        marginRight: 5,
    },
    meses: {
        width: 45,

        height: 30,
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',

        marginBottom: 5,
        marginRight: 5,
    },
    años: {
        width: 55,

        height: 30,
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',

        marginBottom: 5,
        marginRight: 5,
    },
    columnRight: {
        
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 15
    },
    lblcuposDisponibles: {
        marginTop: 10,
        fontSize: 11,
    },
    txtHora: {
        width: '95%',
        height: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    txtfecha: {
        width: '95%',
        height: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    txtnroAsiento: {
        width: 50,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 1,
    },
    /*Telefono y Correo */
    bdc_TeCo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    columnLeft2: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    columnRight2: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    txttelefono: {
        width: '95%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    txtcorreo: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    /*Observaciones */
    bdc_Obsv: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    txtobservaciones: {
        width: '100%',
        height: 90,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 1,
    },
    /*mensaje y boton confirmar */
    bodyBottom: {
        flexDirection: 'row',
        height: 50,
    },
    bdbt_mensaje: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mensajeTextFailed: {
        color: 'red',
        textAlign: 'center',
        fontSize: 13,
    },
    mensajeTextExito: {
        color: 'green',
        textAlign: 'center',
        fontSize: 10,
    },
    bdbtt_btnreservar: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnReservar: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    btnCancelar: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    btnReservarText: {
        color: 'white',
        fontSize: 12,
    },

});
export default reservaStyles;
