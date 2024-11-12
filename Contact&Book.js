
import React from 'react';
import { View, Text, TextInput,Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Header from './Header';

const handleBookingSubmit = () => {
  // Validation logic (can be expanded)
  if (!name || !email || !phone || !date) {
    Alert.alert('Please fill in all fields');
    return;
  }
  Alert.alert('Booking submitted!', `Thank you, ${name}. We will contact you soon.`);
  // Here, you could also send data to a server or database if needed
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Contact & Book</Text>
    
    <TextInput
      style={styles.input}
      placeholder="Your Name"
      value={name}
      onChangeText={setName}
    />
    
    <TextInput
      style={styles.input}
      placeholder="Your Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
    />
    
    <TextInput
      style={styles.input}
      placeholder="Your Phone"
      value={phone}
      onChangeText={setPhone}
      keyboardType="phone-pad"
    />
    
    <TextInput
      style={styles.input}
      placeholder="Preferred Date (YYYY-MM-DD)"
      value={date}
      onChangeText={setDate}
    />
    
    <TextInput
      style={[styles.input, { height: 80 }]}
      placeholder="Additional Notes"
      value={notes}
      onChangeText={setNotes}
      multiline
    />
    
    <Button title="Submit Booking" onPress={handleBookingSubmit} />
  </View>
);

const styles = StyleSheet.create({
container: { flex: 1, padding: 20 },
title: { fontSize: 24, textAlign: 'center', marginVertical: 20 },
input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
});


export default ContactBookScreen;
