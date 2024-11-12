
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MenuEntryScreen = ({ route }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const navigation = useNavigation();

    const addItem = () => {
        if (newItem.trim() !== '') {
            setMenuItems([...menuItems, newItem]);
            setNewItem('');
        }
    };

    const removeItem = (index) => {
        const updatedItems = menuItems.filter((_, i) => i !== index);
        setMenuItems(updatedItems);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>🍴 Culinary Artistry</Text>
            <Text style={styles.tagline}>“Bringing flavor to life, one dish at a time.”</Text>
            <Text style={styles.title}>Menu Entry</Text>
            <TextInput
                style={styles.input}
                placeholder="Add a menu item"
                value={newItem}
                onChangeText={setNewItem}
            />
            <Button title="Add Item" onPress={addItem} />
            <FlatList
                data={menuItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.menuItem}>
                        <Text>{item}</Text>
                        <Button title="Remove" onPress={() => removeItem(index)} />
                    </View>
                )}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate('HomeScreen', { menuItems })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    tagline: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
});

