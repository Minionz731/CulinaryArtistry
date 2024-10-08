import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';
import Header from './Header';

// Import the screen components
import WelcomeScreen from './WelcomeScreen';  
import MenuEntryScreen from './MenuEntryScreen'; 
import PreferencesScreen from './PreferencesScreen'; 
import ContactBookScreen from './Contact&Book'; 
import AdminScreen from './AdminScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  // Predefined list of courses
  const courses = ['Starter', 'Main', 'Dessert'];

  // Initial menu items state
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Salad', description: 'Fresh mixed greens', course: 'Starter', price: '$5' },
    { id: '2', name: 'Steak', description: 'Juicy grilled steak', course: 'Main', price: '$15' },
    { id: '3', name: 'Ice Cream', description: 'Creamy vanilla ice cream', course: 'Dessert', price: '$4' },
  ]);

  // Calculate the total number of menu items
  const totalItems = menuItems.length;

  // Function to add a new menu item (for Part 2)
  const addMenuItem = () => {
    const newItem = {
      id: (menuItems.length + 1).toString(),
      name: `New Dish ${menuItems.length + 1}`,
      description: 'Description of the new dish',
      course: courses[menuItems.length % courses.length],
      price: '$10',
    };
    setMenuItems([...menuItems, newItem]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.details}>{item.description}</Text>
      <Text style={styles.details}>Course: {item.course}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Menu</Text>
      <Text>Total items on the menu: {totalItems}</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* Add button to add new menu items (for Part 2) */}
      <TouchableOpacity style={styles.addButton} onPress={addMenuItem}>
        <Text style={styles.addButtonText}>Add Menu Item</Text>
      </TouchableOpacity>
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
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
