
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import Header from './Header';

const AdminScreen = ({ navigation }) => {
  // Assuming the chef is determined here, we'll navigate based on that.
  const isChef = true; // Change this as needed based on actual logic

  return (
    <View style={styles.container}>
      <Header saying="Welcome, Chef! Manage your menu here." />
      
      <Text style={styles.heading}>Admin Screen</Text>
      
      <Button 
        title="Go to Preferences" 
        onPress={() => {
          if (isChef) {
            navigation.navigate('Preferences');
          } else {
            alert("Access Denied: Only the Chef can proceed.");
          }
        }}
      />
      
      <Text style={styles.title}>Admin Dashboard</Text>
      {/* Admin options for menu management */}
    </View>
  );
};

export default AdminScreen;
