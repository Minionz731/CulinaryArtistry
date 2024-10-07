import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen'; 
import HomeScreen from './HomeScreen'; 
import MenuEntryScreen from './MenuEntryScreen'; 
import PreferencesScreen from './PreferencesScreen'; 
import ContactBookScreen from './Contact&Book'; 
import AdminScreen from './AdminScreen'; 
import Header from './Header'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ header: () => <Header saying="Welcome to Culinary Artistry!" /> }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ header: () => <Header saying="Explore Our Delicious Journey" /> }}
        />
        <Stack.Screen 
          name="MenuEntry" 
          component={MenuEntryScreen} 
          options={{ header: () => <Header saying="Savor the Flavors" /> }}
        />
        <Stack.Screen 
          name="Preferences" 
          component={PreferencesScreen} 
          options={{ header: () => <Header saying="Tailor Your Culinary Experience" /> }}
        />
        <Stack.Screen 
          name="ContactBook" 
          component={Contact&Book} 
          options={{ header: () => <Header saying="Get in Touch and Book" /> }}
        />
        <Stack.Screen 
          name="Admin" 
          component={AdminScreen} 
          options={{ header: () => <Header saying="Manage Your Creations" /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
