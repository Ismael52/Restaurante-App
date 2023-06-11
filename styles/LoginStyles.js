import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
    body: {
        alignItems: "center",
        justifyContent: "center",
    },
    bodyContainer: {
        borderRadius: 10,
        backgroundColor: 'rgba(255, 165, 0, 0.4)',
        padding: 10,
        width: 350,
        
    },
    IniSesionContainer: {
        marginTop: 15,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    lblIniSesion: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Arial',
        color: 'orange',
    },
    lblEmailContrasena: {
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom:5,
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
    txtContrasena: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    accederContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lblOlvidaContrasena: {
        fontWeight: 'bold',
        fontSize: 8,
        fontFamily: 'Arial',
    },
    accederButton: {
        backgroundColor: 'orange',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignItems: 'center',
    },
    accederButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    OtherLoginContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    registerContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
    },
    algo: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start",
    },
    lblRegistrate: {
        fontWeight: 'bold',
        fontSize: 8,
        fontFamily: 'Arial',
        color: 'blue',
        textDecorationLine: "underline",
    }
});

export default loginStyles;
