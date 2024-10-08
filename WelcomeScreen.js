
import React, { useState } from 'react';
import { View, Text, TextInput,Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Header from './Header';

const WelcomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [isChef, setIsChef] = useState(false);

  const handleLogin = () => {
    if (username === 'Christofell') {
      setIsChef(true);
      navigation.navigate('MenuEntry'); // Navigate to Menu Entry for Chefstry
    } else {
      setIsChef(false);
      navigation.navigate('Home'); // Regular user goes to Home screen
    }
  };

  return (
    <View style={styles.container}>
      <Header saying="Every meal tells a story, let yours be unforgettable." />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Private Chef App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity style={styles.button} onPress={() => setIsChef(!isChef)}>
          <Text style={styles.buttonText}>{isChef ? 'Log in as User' : 'Log in as Chef'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
