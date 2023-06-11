import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    <View style={headerStyles.container}>
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
        <View style={historialStyles.listaVigentes}>
          <View style={historialStyles.cuadroVigente}>
            <View style={historialStyles.viewImagen}>
              <Text style={historialStyles.tituloHistorial}>
                imagen
              </Text>
            </View>
            <View style={historialStyles.viewDescripcion}>
              <View>
                <Text style={historialStyles.tituloHistorial}>
                  Descripcion
                </Text>
              </View>
              <View style={historialStyles.cuadroDescripcion}>
                <View>
                  <Text style={historialStyles.tituloHistorial}>
                    fecha
                  </Text>
                </View>
                <View>
                  <Text style={historialStyles.tituloHistorial}>
                    14 de diciembre
                  </Text>
                </View>
              </View>
            </View>
            <View style={historialStyles.viewBotones}>
              <Text style={historialStyles.tituloHistorial}>
                Botones
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleReservaButtonPress}>
        <Text style={historialStyles.button}>Realizar una reserva</Text>
      </TouchableOpacity>
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
    </View>
  );
};


export default HistorialScreen;
