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
        <View style={menuStyles.enpoproContainer}>
          <View style={menuStyles.columnLeft}>
            <View style={menuStyles.lblEntrada}>
              <Text >ENTRADA</Text>
            </View>
            <View style={menuStyles.lblEntrada1}>
              <Text >entrada 1</Text>
            </View>
            <View style={menuStyles.lblEntrada2}>
              <Text >entrada 2</Text>
            </View>
            <View style={menuStyles.lblEntrada}>
              <Text >POSTRE</Text>
            </View>
            <View style={menuStyles.lblEntrada1}>
              <Text >postre 1</Text>
            </View>
            <View style={menuStyles.lblEntrada2}>
              <Text >postre 2</Text>
            </View>
            <View style={menuStyles.lblEntrada}>
              <Text >PRINCIPAL</Text>
            </View>
            <View style={menuStyles.lblEntrada1}>
              <Text >principal 1</Text>
            </View>
            <View style={menuStyles.lblEntrada2}>
              <Text >principal 2</Text>
            </View>
          </View>
          <View style={menuStyles.columnRight}>
            <View style={menuStyles.lblEntrada2}>
              <Text >ingreso 12:00 a 12:30</Text>
            </View>
          </View>
        </View>

      </View>





      {/*boton para pantalla reservar */}
      <TouchableOpacity onPress={handleReservaButtonPress}>
        <Text style={menuStyles.button}>Realizar una reserva</Text>
      </TouchableOpacity>
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
      {/*quitar este boton*/}
      <Button title="Agregar Plato" onPress={handleAgregarPlato} />
    </ImageBackground>
  );
};

export default MenuScreen;
