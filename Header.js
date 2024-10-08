import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ saying }) => {
  return (
    <View style={styles.container}>
     <Image
  source={require('./assets/CA_Logo.jpeg')}
  style={styles.logo}
/>


      <Text style={styles.saying}>{saying}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  saying: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
});

export default Header;
