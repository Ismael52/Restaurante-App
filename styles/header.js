import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        marginTop: 25
    },
    header: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 20,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 50,
        resizeMode: 'contain',
    },
    profileButton: {
        width: 30,
        height: 30,
        borderRadius: 25,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigation: {
        backgroundColor: 'rgba(247, 164, 0, 0)',
        height: 75,
        width: '100%',
        marginBottom: 20,
    },
});

export default headerStyles;