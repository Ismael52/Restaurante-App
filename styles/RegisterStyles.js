import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
    body: {
        alignItems: "center",
        justifyContent: "center",
    },
    bodyContainer: {
        borderRadius: 10,
        backgroundColor: 'rgba(255, 165, 0, 0.3)',
        padding: 10,
        width: 350,
    },
    CreateAcountContainer: {
        marginTop: 15,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    lblCreateAccount: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Arial',
        color: 'orange',
    },
    lblAlls: {
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    txtNombre: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    txtCorreo: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    contraContainer: {
        flexDirection: 'row',
    },
    lblContrasena: {
        fontSize: 12,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    contrasenaLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    contrasenaRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    txtContraseña: {
        width: '95%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    txtContraseña2: {
        width: '95%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    fechaGeneroContainer: {
        flexDirection: 'row',
    },
    fechaLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    pickerFecha1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:10,
    },
    pickerLabel: {
        fontSize: 10,
        marginRight: 5,
    },
    dias: {
        width: 50,
        height: 35,
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
        
        height: 35,
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
        
        height: 35,
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',
        
        marginBottom: 5,
        marginRight: 5,
    },

    generoRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    pickerGenero: {
        width: '100%'
    },
    picker: {
        height: 35,
        fontSize: 14,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',
        paddingLeft: 10,
        marginBottom: 5,
        marginRight: 5,
    },
});

export default registerStyles;