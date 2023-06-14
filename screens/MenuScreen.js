import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image } from 'react-native';
import headerStyles from '../styles/header';
import menuStyles from '../styles/MenuStyles';
import { ImageBackground } from 'react-native-web';

const MenuScreen = ({ navigation }) => {
  const [platos, setPlatos] = useState([]);

  // Función para agregar platos a la lista
  const agregarPlato = (plato) => {
    setPlatos([...platos, plato]);
  };
  /*Navegaciones*/
  const handleAgregarPlato = () => {
    navigation.navigate('AgregarPlato', { agregarPlato });
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
            style={headerStyles.logo}
            source={require("../assets/logo.jpeg")}
          />
        </View>
      </View>
      <View style={menuStyles.title}>
        <Text style={menuStyles.lblMenu}>MENÚ</Text>
      </View>
      {/*EL BODY SE REPPITE TANTOS COMO SEAN NECESARIO PARA MOSTRAR LOS MENUS */}
      {/* agregar una flatList o un for*/}
      <View style={menuStyles.body}>
        {/*IMAGEN DEL MENU */}
        <View style={menuStyles.imageContainer}>
          <Image
            style={menuStyles.imageMenu}
            source={require("../assets/menuIMG.jpg")}
          />
        </View>
        <View style={menuStyles.lbltitleTipoComida}>
          <Text style={menuStyles.lblTipococina}>Comida Francesa</Text>
        </View>
        <View style={menuStyles.leceriContainer}>
          <View style={menuStyles.leftContainer}>
            <Text style={menuStyles.lblMenuEleccion}>Menu a Eleccion</Text>
          </View>
          <View style={menuStyles.centerContainer}>
            <Text style={menuStyles.lblprecioMenu}>Precio:</Text>
          </View>
          <View style={menuStyles.rightContainer}>
            <Text style={menuStyles.lblPrecio}>60</Text>
          </View>
          <View style={menuStyles.rightContainer2}>
            <Text style={menuStyles.lblPrecioBS}>Bs.</Text>
          </View>
        </View>
        {/*ENTRADA POSTRE PRINCIPAL */}
        <View style={menuStyles.enpopriContainer}>
          <View style={menuStyles.columnLeft}>
            <View >
              <Text style={menuStyles.lblEntrada}>ENTRADA</Text>
            </View>
            <View >
              <Text style={menuStyles.lblEntrada1}>entrada 1</Text>
            </View>
            <View >
              <Text style={menuStyles.lblEntrada2}>entrada 2</Text>
            </View>

            <View >
              <Text style={menuStyles.lblPostre}>POSTRE</Text>
            </View>
            <View >
              <Text style={menuStyles.lblPostre1}>postre 1</Text>
            </View>
            <View >
              <Text style={menuStyles.lblPostre2}>postre 2</Text>
            </View>

            <View >
              <Text style={menuStyles.lblPrincipal}>PRINCIPAL</Text>
            </View>
            <View >
              <Text style={menuStyles.lblPrincipal1}>principal 1</Text>
            </View>
            <View >
              <Text style={menuStyles.lblEntrada2}>principal 2</Text>
            </View>
          </View>
          <View style={menuStyles.columnRight}>
            <View style={menuStyles.ingresoContainer}>
              <Text style={menuStyles.lblIngreso}>INGRESO: </Text>
              <Text style={menuStyles.lblIngreso}>12:00 a 12:30</Text>
            </View>
            <View style={menuStyles.item}>{/*para la fecha pueden dividirlo como la hora de ingreso en diferentes lblText */}
              <Text style={menuStyles.lblFecha}>Martes 14 de Marzo</Text>
            </View>
            <View style={menuStyles.item}>
              <Text style={menuStyles.lblFecha}>Martes 21 de Marzo</Text>
            </View>
            <View style={menuStyles.ingresoContainer}>
              <Text style={menuStyles.lblIngreso2}>INGRESO: </Text>
              <Text style={menuStyles.lblIngreso2}>19:00 a 19:30</Text>
            </View>
            <View style={menuStyles.item}>
              <Text style={menuStyles.lblFecha}>Martes 15 de Marzo</Text>
            </View>
            <View style={menuStyles.item}>
              <Text style={menuStyles.lblFecha}>Martes 15 de Marzo</Text>
            </View>
            <View style={menuStyles.btnReservarcontainer}>
              <TouchableOpacity style={menuStyles.btnReservar} onPress={handleReservaButtonPress}>
                <Text style={menuStyles.buttonText}>RESERVAR</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </View>

      {/*
      
      <FlatList
        data={platos}
        renderItem={({ item }) => (
          <View style={styles.platoContainer}>
            <Text style={styles.nombrePlato}>{item.nombre}</Text>
            <Text style={styles.tipoPlato}>{item.tipo_plato}</Text>
            <Text style={styles.descripcionPlato}>{item.descripcion}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id_plato.toString()}
      />
      
      <Button title="Agregar Plato" onPress={handleAgregarPlato} />
      */}
    </ImageBackground>
  );
};

export default MenuScreen;
