import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import headerStyles from '../styles/header'
import HomeStyles from '../styles/HomeStyles';
import footerStyles from '../styles/footer';

const HomeScreen = ({ navigation }) => {
  const handleProfilePress = () => {
    navigation.navigate('Login');
  };

  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };
  const handleHistorialPress = () => {
    navigation.navigate('Historial');
  };

  const handleContactoPress = () => {
    navigation.navigate('Contacto');
  };
  const handleInicioPress = () => {
    navigation.navigate('Home');
  };
  const handleAvisoPress = () => {

  };
  const handleBusquedaPress = () => {

  };
  const handleSalirPress = () => {

  };



  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.header}>
        {/* Logo de la empresa */}
        <View style={headerStyles.logoContainer}>
          <Image source={require('../assets/logo.jpeg')} style={headerStyles.logo} />
        </View>
        <TouchableOpacity style={headerStyles.profileButton} onPress={handleProfilePress}>
          <Icon name="user" size={25} color="white" />
        </TouchableOpacity>
      </View>


      {/*Carrusel de imagenes */}
      <View style={HomeStyles.contentCarrusel}>
        <Image source={require('../assets/image1.jpg')} style={HomeStyles.image} />
      </View>


      {/* Contenido de la pantalla */}
      <View style={HomeStyles.content}>
        {/* Botones */}
        <TouchableOpacity style={HomeStyles.view} onPress={handleMenuPress}>
          <Text style={HomeStyles.viewText}>MENU</Text>
          {/*
          <Image source={require('../assets/image1.jpg')} style={HomeStyles.backgroundImage} />
          */}
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyles.view} onPress={handleHistorialPress}>
          <Text style={HomeStyles.viewText}>HISTORIAL</Text>
          {/*
          <Image source={require('../assets/image2.jpg')} style={HomeStyles.backgroundImage} />
          */}
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyles.view} onPress={handleContactoPress}>
          <Text style={HomeStyles.viewText}>CONTACTO</Text>
          {/*
          <Image source={require('../assets/image3.jpg')} style={HomeStyles.backgroundImage} />
        */}
        </TouchableOpacity>
      </View>
      {/*el footer */}
      <View style={footerStyles.footer}>
        <TouchableOpacity style={footerStyles.view} onPress={handleInicioPress}>
          <Icon name="home" size={30} color="white" />
          <Text style={footerStyles.viewText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} onPress={handleMenuPress}>
          <Icon name="home" size={30} color="white" />
          <Text style={footerStyles.viewText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} onPress={handleBusquedaPress}>
          <Icon name="search" size={30} color="white" />
          <Text style={footerStyles.viewText}>Búsqueda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} onPress={handleAvisoPress}>
          <Icon name="bell" size={30} color="white" />
          <Text style={footerStyles.viewText}>Aviso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.view} onPress={handleSalirPress}>
          <Icon name="sign-out" size={30} color="white" />
          <Text style={footerStyles.viewText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
