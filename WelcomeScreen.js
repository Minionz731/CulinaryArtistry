import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const WelcomeScreen = () => {
    const [name, setName] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (name === 'Chefstry') {
            navigation.navigate('MenuEntryScreen');
        } else {
            alert('Please log in as a regular user.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>🍴 Culinary Artistry</Text>
            <Text style={styles.tagline}>“Bringing flavor to life, one dish at a time.”</Text>
            <Text style={styles.welcomeText}>Welcome to Culinary Artistry!</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />
            <Button title="Log In" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    welcomeText: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 20,
    },
});
