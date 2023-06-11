import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import headerStyles from "../styles/header";
import { Picker } from '@react-native-picker/picker';
import footerStyles from "../styles/footer";
import registerStyles from "../styles/RegisterStyles";
import { ImageBackground } from "react-native";


const RegisterScreen = () => {
  const [inputs, setInputs] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { nombre, contraseña, correo } = inputs;

  const HandleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = async () => {
    if (nombre !== "" && contraseña !== "" && correo !== "") {
      const Usuario = {
        nombre,
        correo,
        contraseña,
      };
      setLoading(true);
      try {
        const res = await axios.post("http://192.168.3.9:4000/register", Usuario);
        const { data } = res;
        setMensaje(data.mensaje);
        setInputs({ nombre: "", contraseña: "", correo: "" });
        setTimeout(() => {
          setMensaje("");
          // Navegar a la pantalla de inicio de sesión
          navigation.navigate("Login");
        }, 1500);
      } catch (error) {
        console.error(error);
        setMensaje("Hubo un error: " + error.message);
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }

      setLoading(false);
    }
  };
  /* VALIDACION DE FECHAS */
  /*AGREGAR */

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

      </View>
      <View style={headerStyles.navigation}>
        {/* espacio vacio */}
      </View>
      <View style={registerStyles.body}>
        <View style={registerStyles.bodyContainer}>
          <View style={registerStyles.CreateAcountContainer}>
            <Text style={registerStyles.lblCreateAccount}>CREAR CUENTA</Text>
          </View>
          {/*{/*nombre y correos */}
          <View>
            <Text style={registerStyles.lblAlls}>Nombre Completo:</Text>
            <TextInput
              style={registerStyles.txtNombre}
              onChangeText={(value) => HandleChange("nombre", value)}
              value={nombre}
              placeholder="Nombre completo"
              autoCompleteType="off"
            />
          </View>
          <View>
            <Text style={registerStyles.lblAlls}>Correo Electronico:</Text>
            <TextInput
              style={registerStyles.txtCorreo}
              onChangeText={(value) => HandleChange("correo", value)}
              value={correo}
              placeholder="example@gmail.com"
              autoCompleteType="email"
            />
          </View>
          {/*CONTRASEÑAS */}
          <View style={registerStyles.contraContainer}>
            <View style={registerStyles.contrasenaLeft}>
              <Text style={registerStyles.lblContrasena}>Contraseña:</Text>
              <TextInput
                style={registerStyles.txtContraseña}
                onChangeText={(value) => HandleChange("contraseña", value)}
                value={contraseña}
                placeholder="Contraseña..."
                secureTextEntry={true}
                autoCompleteType="off"
              />
            </View>
            <View style={registerStyles.contrasenaRight}>
              <Text style={registerStyles.lblContrasena}>Repetir Contraseña:</Text>
              <TextInput
                style={registerStyles.txtContraseña2}
                placeholder="Contraseña..."
              />
            </View>
          </View>
          {/*FECHAS Y SEXO */}
          <View style={registerStyles.fechaGeneroContainer}>
            <View style={registerStyles.fechaLeft}>
              <Text style={registerStyles.lblAlls}>Fecha de Nacimiento:</Text>
              <View style={registerStyles.pickerFecha1}>
                <Picker style={registerStyles.dias}>
                  <Picker.Item label="DD" value="" style={registerStyles.pickerLabel} />
                  {Array.from({ length: 31 }, (_, index) => (
                    <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />
                  ))}
                </Picker>
                <Picker style={registerStyles.meses}>
                  <Picker.Item label="MM" value="" style={registerStyles.pickerLabel} />
                  {Array.from({ length: 12 }, (_, index) => (
                    <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />
                  ))}
                </Picker>
                <Picker style={registerStyles.años}>
                  <Picker.Item label="YY" value="" style={registerStyles.pickerLabel} />
                  {Array.from({ length: 56 }, (_, index) => (
                    <Picker.Item key={index} label={`${1950 + index}`} value={`${1950 + index}`} />
                  ))}
                </Picker>
              </View>
            </View>


            <View style={registerStyles.generoRight}>
              <Text style={registerStyles.lblAlls}>Genero:</Text>
              <View style={registerStyles.pickerGenero}>
                <Picker style={registerStyles.picker}>
                  <Picker.Item label="Genero" value="" />
                  <Picker.Item label="Hombre" value="Hombre" />
                  <Picker.Item label="Mujer" value="Mujer" />

                </Picker >
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={onSubmit}>
              <Text>{loading ? "Cargando..." : "Registrarme"}</Text>
            </TouchableOpacity>
            <Text>
              ¿Ya tienes una cuenta?{" "}
              <Text onPress={() => navigation.navigate("Login")}>Inicia Sesión!</Text>
            </Text>
            {mensaje && <Text>{mensaje}</Text>}
          </View>
        </View>
      </View>



    </ImageBackground>
  );
};

export default RegisterScreen;
