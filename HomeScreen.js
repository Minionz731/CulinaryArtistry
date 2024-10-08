
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the screen components
import WelcomeScreen from './WelcomeScreen';  
import MenuEntryScreen from './MenuEntryScreen'; 
import PreferencesScreen from './PreferencesScreen'; 
import ContactBookScreen from './Contact&Book'; 
import AdminScreen from './AdminScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>
      <Button title="Go to Menu" onPress={() => navigation.navigate('MenuEntry')} />
    </View>
  );

  const menuItems = [
    { id: '1', name: 'Salad', description: 'Fresh mixed greens', course: 'Starter', price: '$5' },
    { id: '2', name: 'Steak', description: 'Juicy grilled steak', course: 'Main', price: '$15' },
    { id: '3', name: 'Ice Cream', description: 'Creamy vanilla ice cream', course: 'Dessert', price: '$4' },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.details}>{item.description}</Text>
      <Text style={styles.details}>{item.course}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MenuEntry" component={MenuEntryScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
        <Stack.Screen name="ContactBook" component={ContactBookScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});

export default App;
