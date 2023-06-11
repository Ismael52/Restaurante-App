import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, ImageBackground, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import headerStyles from '../styles/header'
import reservaStyles from '../styles/ReservaStyles'
import footerStyles from '../styles/footer';

const ReservaScreen = () => {
  /**Obtiene muestra los datos de los inputs */
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');
  const [fecha, setFecha] = useState('');
  const [asientos, setAsientos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const [showMessage, setShowMessage] = useState(true);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleReservar = () => {
    if (nombre.trim() === '' || hora.trim() === '19:00 a 19:30' || fecha.trim() === '' || asientos.trim() === '' || telefono.trim() === '' || correo.trim() === '') {
      setMostrarMensaje(true);
      return;
    }

    console.log('Nombre:', nombre);
    console.log('Hora:', hora);
    console.log('Fecha:', fecha);
    console.log('Asientos:', asientos);
    console.log('Teléfono:', telefono);
    console.log('Correo:', correo);
    console.log('Observaciones:', observaciones);

    setNombre('');
    setHora('');
    setFecha('');
    setAsientos('');
    setTelefono('');
    setCorreo('');
    setObservaciones('');
    setShowMessage(false);
    setMostrarMensaje(false);

  };
  /*Acciones para funcionar xd */
  const renderMensaje = () => {
    if (hora === '12:00 a 12:30') {
      return (
        <View style={reservaStyles.bdbt_mensaje}>
          <Text style={reservaStyles.mensajeTextExito}>
            Hora Disponible
          </Text>
        </View>
      );
    } else if (hora === '19:00 a 19:30') {
      return (
        <View style={reservaStyles.bdbt_mensaje}>
          <Text style={reservaStyles.mensajeTextFailed}>
            No hay cupo disponible en la Hora Seleccionada.
          </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  /*NAVEGACIONES*/
  const navigation = useNavigation();
  const handleProfilePress = () => {
    navigation.navigate('Login');
  };
  const handleInicioPress = () => {
    navigation.navigate('Home');
  };
  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };
  const handleCancelarPress = () => {
    navigation.goBack();
  };



  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={headerStyles.backgroundImage}
      imageStyle={{ opacity: 0.3 }}
    >
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
        <View style={headerStyles.navigation}>
          {/* espacio vacio */}
        </View>
        <View style={reservaStyles.body}>
          <View style={reservaStyles.bodyTop}>
            <Text style={reservaStyles.lblReserva}>RESERVA</Text>
          </View>
          <View style={reservaStyles.bodyCenter}>
            {mostrarMensaje && (
              <Text style={reservaStyles.mensajeTextFailed}>Por favor, complete todos los campos requeridos</Text>
            )}
            {/*aqui esta el nombre*/}
            <View style={reservaStyles.bdc_NomCom}>
              <Text style={reservaStyles.lbltextos}>Nombre completo:</Text>
              <TextInput
                style={reservaStyles.txtnombre}
                placeholder="Ingresa tu nombre completo"
                value={nombre}
                onChangeText={text => setNombre(text)}
              />
            </View>

            {/*aqui esta la Hora, Fecha y Asientos */}
            <View style={reservaStyles.bdc_HoFeAs}>
              <View style={reservaStyles.columnLeft}>
                <Text style={reservaStyles.lbltextos}>Horario</Text>
                {/* Selector de hora */}

                <View style={reservaStyles.pickerContainer}>
                  <Picker style={reservaStyles.picker}
                    selectedValue={hora}
                    onValueChange={(horaValue) => setHora(horaValue)}
                  >
                    <Picker.Item label="Horarios" value="" />
                    <Picker.Item label="12:00 a 12:30" value="12:00 a 12:30" />
                    <Picker.Item label="19:00 a 19:30" value="19:00 a 19:30" />

                  </Picker >
                </View>

              </View>
              <View style={reservaStyles.columnCenter}>
                <Text style={reservaStyles.lbltextos}>Fecha:</Text>
                <View style={reservaStyles.pickerFecha1}>
                  <Picker style={reservaStyles.dias}>
                    <Picker.Item label="DD" value="" style={reservaStyles.pickerLabel} />
                    {Array.from({ length: 31 }, (_, index) => (
                      <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />
                    ))}
                  </Picker>
                  <Picker style={reservaStyles.meses}>
                    <Picker.Item label="MM" value="" style={reservaStyles.pickerLabel} />
                    {Array.from({ length: 12 }, (_, index) => (
                      <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />
                    ))}
                  </Picker>
                  <Picker style={reservaStyles.años}>
                    <Picker.Item label="YY" value="" style={reservaStyles.pickerLabel} />
                    {Array.from({ length: 56 }, (_, index) => (
                      <Picker.Item key={index} label={`${1950 + index}`} value={`${1950 + index}`} />
                    ))}
                  </Picker>
                </View>
              </View>
              <View style={reservaStyles.columnRight}>
                <Text style={reservaStyles.lbltextos}>Asientos:</Text>
                {/* Input de números */}
                <Picker style={reservaStyles.dias}>
                  <Picker.Item label="#" value="" style={reservaStyles.pickerLabel} />
                  {Array.from({ length: 6 }, (_, index) => (
                    <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />
                  ))}
                </Picker>
                {/*<Text style={styles.lblcuposDisponibles}>Cupooooos disponibles: 22</Text>*/}
              </View>
            </View>
            {/*aqui esta Telefono y Correo */}
            <View style={reservaStyles.bdc_TeCo}>
              <View style={reservaStyles.columnLeft2}>
                <Text style={reservaStyles.lbltextos}>Telefono</Text>
                {/* Input de telefono */}
                <TextInput
                  style={reservaStyles.txttelefono}
                  placeholder="Ingresa Celular"
                  value={telefono}
                  onChangeText={text => setTelefono(text)}
                />
              </View>
              <View style={reservaStyles.columnRight2}>
                <Text style={reservaStyles.lbltextos}>Correo Electronico</Text>
                {/* Input de correo electronico */}
                <TextInput
                  style={reservaStyles.txtcorreo}
                  placeholder="Ingresa Correo"
                  value={correo}
                  onChangeText={text => setCorreo(text)}
                />
              </View>
            </View>

            {/*aqui esta las observaciones*/}
            <View style={reservaStyles.bdc_Obsv}>
              <Text style={reservaStyles.lbltextos}>Observaciones</Text>
              <TextInput
                style={reservaStyles.txtobservaciones}
                placeholder="Ingrese sus observaciones"
                value={observaciones}
                onChangeText={text => setObservaciones(text)}
              />
            </View>

          </View>

          {/*aqui esta el mensaje y el boton*/}
          <View style={reservaStyles.bodyBottom}>
            <View style={reservaStyles.bdbtt_btnreservar}>
              <TouchableOpacity style={reservaStyles.btnCancelar} onPress={handleCancelarPress}>
                <Text style={reservaStyles.btnReservarText}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
            {showMessage && renderMensaje()}
            <View style={reservaStyles.bdbtt_btnreservar}>
              <TouchableOpacity style={reservaStyles.btnReservar} onPress={handleReservar}>
                <Text style={reservaStyles.btnReservarText}>RESERVAR</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
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
    </ImageBackground>
  );
};
export default ReservaScreen;
