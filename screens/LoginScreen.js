import axios from "axios";
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import headerStyles from "../styles/header";
import footerStyles from "../styles/footer";
import loginStyles from "../styles/LoginStyles";

const LoginScreen = () => {
  const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { correo, contraseña } = inputs;
  const HandleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };
  const onSubmit = async () => {
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };
      setLoading(true);
      try {
        const res = await axios.post("http://192.168.3.9:4000/login", Usuario);
        const { data } = res;
        setMensaje(data.mensaje);
        setTimeout(async () => {
          setMensaje("");
          await AsyncStorage.setItem("token", data?.usuario.token);
          navigation.navigate("Welcome");
        }, 1500);
      } catch (error) {
        console.error(error);
        setMensaje("Correo o contraseña incorrecta");
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }
      setInputs({ correo: "", contraseña: "" });
      setLoading(false);
    }
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
      </View>
      <View style={headerStyles.navigation}>
        {/* espacio vacio */}
      </View>
      
      <View style={loginStyles.body}>
        <View style={loginStyles.bodyContainer}>
          <View style={loginStyles.IniSesionContainer}>
            <Text style={loginStyles.lblIniSesion}>INICIAR SESION</Text>
          </View>
          <View>
            {mensaje && <Text>{mensaje}</Text>}
            <Text style={loginStyles.lblEmailContrasena}>Correo:</Text>
            <TextInput
              style={loginStyles.txtCorreo}
              onChangeText={(value) => HandleChange("correo", value)}
              value={correo}
              placeholder="example@gmail.com"
              autoCompleteType="email"
            />
          </View>
          <View>
            <Text style={loginStyles.lblEmailContrasena}>Contraseña:</Text>
            <TextInput
              style={loginStyles.txtContrasena}
              onChangeText={(value) => HandleChange("contraseña", value)}
              value={contraseña}
              placeholder="Contraseña"
              secureTextEntry={true}
              autoCompleteType="off"
            />
          </View>
          <View style={loginStyles.accederContainer}>
            <View>
              <Text style={loginStyles.lblOlvidaContrasena}>Olvidaste tu Contraseña?, Haz Click AQUI</Text>
            </View>
            <TouchableOpacity style={loginStyles.accederButton} onPress={onSubmit}>
              <Text style={loginStyles.accederButtonText}>
                {loading ? "Cargando..." : "Acceder"}
              </Text>
            </TouchableOpacity>
          </View>
          {/* ESTO NO SIRVE A MENOS QUE PUEDAN LOGEAR POR GOOGLE O FACEBOOK
          <View style={loginStyles.OtherLoginContainer}>
            <Text>Iniciar Sesion Con:</Text>
            <View>
              <View style={loginStyles.iconsContainer}>
                <View style={loginStyles.imageContainer}>
                  <Image style={loginStyles.image} source={require('../assets/facebookIcon.png')} />
                </View>
                <View style={loginStyles.imageContainer}>
                  <Image style={loginStyles.image} source={require('../assets/facebookIcon.png')} />
                </View>
                <View style={loginStyles.imageContainer}>
                  <Image style={loginStyles.image} source={require('../assets/facebookIcon.png')} />
                </View>
              </View>
            </View>
          </View>
          */}
          <View style={loginStyles.registerContainer} >
            <View style={loginStyles.algo} >
              <Text style={loginStyles.lblOlvidaContrasena}>¿No Tienes Una Cuenta?,</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={loginStyles.lblRegistrate}>Regístrate</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
