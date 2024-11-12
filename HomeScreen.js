import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export const HomeScreen = ({ route }) => {
    const predefinedCourses = [
        'Appetizers',
        'Main Courses',
        'Desserts',
        'Beverages'
    ];
    const menuItems = route.params?.menuItems || [];

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>🍴 Culinary Artistry</Text>
            <Text style={styles.tagline}>“Bringing flavor to life, one dish at a time.”</Text>
            <Text style={styles.title}>Home</Text>

            <Text style={styles.sectionTitle}>Courses:</Text>
            <FlatList
                data={predefinedCourses}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.courseItem}>{item}</Text>
                )}
            />

            <Text style={styles.sectionTitle}>Chef's Menu:</Text>
            <FlatList
                data={menuItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.menuItem}>{item}</Text>
                )}
            />

            <Text style={styles.footer}>Total Items: {menuItems.length}</Text>
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    courseItem: {
        fontSize: 16,
        marginVertical: 4,
    },
    menuItem: {
        fontSize: 16,
        marginVertical: 4,
    },
    footer: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});
