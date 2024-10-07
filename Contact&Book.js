
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Header from './Header';

const ContactBookScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Contact & Book</Text>
    <TextInput style={styles.input} placeholder="Name" />
    <TextInput style={styles.input} placeholder="Email" />
    <TextInput style={styles.input} placeholder="Phone Number" />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>
);

export default ContactBookScreen;
