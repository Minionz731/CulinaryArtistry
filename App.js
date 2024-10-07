import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './Header';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'CA_Logo.jpeg' }} // Replace with your logo URL or local image file
        style={styles.logo}
      />
      {/* Italic Saying */}
      <Text style={styles.saying}>“Savor the possibilities, every dish is an adventure.”</Text>

      {/* Main Content */}
      <View style={styles.content}>
        <Text>Welcome to Culinary Artistry!</Text>
        {/* Add the rest of your content here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
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
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

