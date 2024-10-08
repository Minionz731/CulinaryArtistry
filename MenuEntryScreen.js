
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import { styles } from './styles';

const MenuEntryScreen = ({ navigation }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menu, setMenu] = useState([]); // State to hold the list of menu items

  const handleAddMenuItem = () => {
    if (dishName && description && course && price) {
      // Create a new menu item object
      const newItem = {
        id: Date.now().toString(), // unique ID for the item
        dishName,
        description,
        course,
        price,
      };

      // Add the new item to the menu list
      setMenu([...menu, newItem]);

      // Clear input fields after adding
      setDishName('');
      setDescription('');
      setCourse('');
      setPrice('');
    } else {
      alert('Please fill in all fields to add a dish.');
    }
  };

  const handleRemoveMenuItem = (itemId) => {
    // Remove the item with the specified ID from the menu list
    setMenu(menu.filter(item => item.id !== itemId));
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuText}>Dish: {item.dishName}</Text>
      <Text style={styles.menuText}>Description: {item.description}</Text>
      <Text style={styles.menuText}>Course: {item.course}</Text>
      <Text style={styles.menuText}>Price: {item.price}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveMenuItem(item.id)}>
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu Entry</Text>
      
      <Text style={styles.title}>Add a New Dish</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (e.g., Starter)"
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddMenuItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

      {/* Menu List */}
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No menu items added yet.</Text>}
      />

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default MenuEntryScreen;
