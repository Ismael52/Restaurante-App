import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AgregarPlatoScreen = ({ navigation, route }) => {
  const [idPlato, setIdPlato] = useState('');
  const [estado, setEstado] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [tipoPlato, setTipoPlato] = useState('');

  const { agregarPlato } = route.params;

  const handleAgregarPlato = () => {
    const nuevoPlato = {
      id_plato: idPlato,
      estado,
      descripcion,
      imagen,
      nombre,
      tipo_plato: tipoPlato,
    };

    agregarPlato(nuevoPlato); // Agregar el plato a la lista en MenuScreen

    // Reiniciar los campos después de agregar el plato
    setIdPlato('');
    setEstado('');
    setDescripcion('');
    setImagen('');
    setNombre('');
    setTipoPlato('');

    navigation.goBack(); // Regresar a la pantalla anterior (MenuScreen)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Plato</Text>
      <TextInput
        style={styles.input}
        placeholder="ID del plato"
        value={idPlato}
        onChangeText={(text) => setIdPlato(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={(text) => setEstado(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL de la imagen"
        value={imagen}
        onChangeText={(text) => setImagen(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de plato"
        value={tipoPlato}
        onChangeText={(text) => setTipoPlato(text)}
      />
      <Button title="Agregar plato" onPress={handleAgregarPlato} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AgregarPlatoScreen;
