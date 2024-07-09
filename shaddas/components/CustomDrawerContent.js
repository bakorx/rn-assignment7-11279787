import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <Text style={styles.drawerTitle}>ERIC ATSU</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Store')}>
        <Text style={styles.drawerItem}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Locations')}>
        <Text style={styles.drawerItem}>Locations</Text>
      </TouchableOpacity>
      {/* Add other drawer items similarly */}
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 16,
  },
  drawerTitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  drawerItem: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default CustomDrawerContent;
