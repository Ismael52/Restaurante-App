import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ImageBackground } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import historialStyles from '../styles/HistorialStyles';
import headerStyles from '../styles/header';
import footerStyles from '../styles/footer';

const HistorialScreen = ({ navigation }) => {

  /*Navegaciones*/
  const handleProfilePress = () => {
    //abrir la pantalla de perfil o inicio de session
  };
  const handleInicioPress = () => {
    navigation.navigate('Home');
  };
  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };
  const handleReservaButtonPress = () => {
    navigation.navigate('Reserva');
  };

  return (
    <ImageBackground
      style={headerStyles.container}
      source={require("../assets/image2.jpg")}
      imageStyle={{ opacity: 0.2 }}
    >
      <View style={headerStyles.header}>
        {/* Logo de la restaurante */}
        <View style={headerStyles.logoContainer}>
          <Image
            source={require('../assets/logo.jpeg')}
            style={headerStyles.logo} />
        </View>
        <TouchableOpacity style={headerStyles.profileButton} onPress={handleProfilePress}>
          <Icon name="user" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {/*Contenido de historial*/}
      <View style={historialStyles.body}>
        <View style={historialStyles.titulo}>
          <Text style={historialStyles.lblHistorial}>
            HISTORIAL
          </Text>
        </View>
        <View style={historialStyles.subTitulo}>
          <Text style={historialStyles.tituloHistorial}>
            Vigente
          </Text>
        </View>
        {/*el view HistorialContainer se repite varias veces */}
        <View style={historialStyles.historialContainer}>
          <View style={historialStyles.column1}>
            <Image source={require('../assets/menuIMG.jpg')} style={historialStyles.image} />
          </View>
          <View style={historialStyles.column2}>
            <View style={historialStyles.view1}>
              <Text style={historialStyles.lbltipoCocina}>Cocina Francesa </Text>
            </View>
            <View style={historialStyles.view2}>
              <Text style={historialStyles.lblfecha}>Fecha: </Text>
              <Text style={historialStyles.lblRespuesta}>fecha ejemplo </Text>
            </View>
            <View style={historialStyles.view3}>
              <Text style={historialStyles.lblAsientos}>Asientos: </Text>
              <Text style={historialStyles.lblRespuesta}>6</Text>
            </View>
            <View style={historialStyles.view4}>
              <Text style={historialStyles.lblHora}>Hora: </Text>
              <Text style={historialStyles.lblRespuesta}>20:30</Text>
            </View>
          </View>
          <View style={historialStyles.column3}>
            {/* 
            
            <View style={historialStyles.view5}>
              <Text style={historialStyles.text5}>Cerrado menu a Eleccion</Text>
            </View>
            */}
            <TouchableOpacity style={historialStyles.touch1}>
              <Text style={historialStyles.text6} onPress={handleReservaButtonPress}>EDITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={historialStyles.touch2}>
              <Text style={historialStyles.text7}>ELIMINAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={historialStyles.subTitulo}>
          <Text style={historialStyles.tituloHistorial}>
            Vencidos
          </Text>
        </View>
      </View>

      {/*Footer */}
      <View style={footerStyles.footer}>
        <TouchableOpacity style={footerStyles.view} onPress={handleInicioPress}>
          <Icon name="home" size={30} color="white" />
          <Text style={footerStyles.viewText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} onPress={handleMenuPress}>
          <Icon name="home" size={30} color="white" />
          <Text style={footerStyles.viewText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} >
          <Icon name="search" size={30} color="white" />
          <Text style={footerStyles.viewText}>Búsqueda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} >
          <Icon name="bell" size={30} color="white" />
          <Text style={footerStyles.viewText}>Aviso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} >
          <Icon name="sign-out" size={30} color="white" />
          <Text style={footerStyles.viewText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default HistorialScreen;
