
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import Header from './Header';

const HomeScreen = () => {
  const menuItems = [
    { id: '1', name: 'Salad', description: 'Fresh mixed greens', course: 'Starter', price: '$5' },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Menu</Text>
      <Text style={styles.sectionTitle}>Total Items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <Text style={styles.listText}>{item.name}</Text>
            <Text style={styles.listText}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
