
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Header from './Header';

const PreferencesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Preferences Screen</Text>
      <Button title="Go to Contact & Book" onPress={() => navigation.navigate('ContactBook')} />
    </View>
  );
  <View style={styles.container}>
    <Text style={styles.title}>User Preferences</Text>
    {/* Add preferences options here */}
  </View>
}
export default PreferencesScreen;
