
import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const PreferencesScreen = () => {
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const navigation = useNavigation();

    const savePreferences = () => {
        alert("Preferences saved successfully!");
        navigation.navigate('HomeScreen', {
            preferences: { isVegetarian, isVegan, isGlutenFree }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>🍴 Culinary Artistry</Text>
            <Text style={styles.tagline}>“Bringing flavor to life, one dish at a time.”</Text>
            <Text style={styles.title}>Set Your Dietary Preferences</Text>

            <View style={styles.preferenceItem}>
                <Text style={styles.preferenceLabel}>Vegetarian</Text>
                <Switch
                    value={isVegetarian}
                    onValueChange={setIsVegetarian}
                />
            </View>
            <View style={styles.preferenceItem}>
                <Text style={styles.preferenceLabel}>Vegan</Text>
                <Switch
                    value={isVegan}
                    onValueChange={setIsVegan}
                />
            </View>
            <View style={styles.preferenceItem}>
                <Text style={styles.preferenceLabel}>Gluten-Free</Text>
                <Switch
                    value={isGlutenFree}
                    onValueChange={setIsGlutenFree}
                />
            </View>

            <Button title="Save Preferences" onPress={savePreferences} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    tagline: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    preferenceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    preferenceLabel: {
        fontSize: 18,
    },
});
 
