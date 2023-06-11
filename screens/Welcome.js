import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = () => {
  const [nombre, setnombre] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('http://192.168.3.9:4000/user', {
            headers: {
              token: token,
            },
          });
          const { data } = res;
          setnombre(data.nombre);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>
        {nombre ? `¡Felicitaciones ${nombre}!` : '¿Qué estás haciendo? 🕵️‍♂️'}
      </Text>
      <Text>
        {nombre ? 'Te pudiste loguear correctamente🎉' : 'Te estamos viendo...'}
      </Text>
      <View>
        <Button
          title="Login"
          onPress={handleLogin}
          color="#6358dc"
        />
        <Button
          title="Register"
          onPress={handleRegister}
          color="#6358dc"
        />
      </View>
    </View>
  );
};

export default Welcome;
