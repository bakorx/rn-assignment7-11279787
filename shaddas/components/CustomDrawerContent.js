import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView  } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.drawerContent}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.closeDrawer()}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.drawerTitle}>Kwame Bakor</Text>
        <View style={styles.divider} />
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Store')}>Store</Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Locations')}>Locations</Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Blog')}>Blog</Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Jewelry')}>Jewelry</Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Electronic')}>Electronic</Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate('Clothing')}>Clothing</Text>
      </View>
    </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: '',
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  divider: {
    width: '50%',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default CustomDrawerContent;
