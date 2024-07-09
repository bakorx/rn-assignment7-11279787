import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton}>
            <Image source={require('../assets/Menu.png')} style={styles.icon} />
            </TouchableOpacity>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
            <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerButton}>
                <Image source={require('../assets/Search.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
                <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
            </TouchableOpacity>
            </View>
        </View>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productMaterials}>MATERIALS</Text>
        <Text style={styles.productMaterialsText}>
            We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
        </Text>
        <View style={styles.materialIcons}>
            <View style={styles.materialIconRow}>
            <Image source={require('../assets/Do Not Bleach.png')} style={styles.materialIcon} />
            <Text style={styles.materialIconText}>Do not use bleach</Text>
            </View>
            <View style={styles.materialIconRow}>
            <Image source={require('../assets/Do Not Tumble Dry.png')} style={styles.materialIcon} />
            <Text style={styles.materialIconText}>Do not tumble dry</Text>
            </View>
            <View style={styles.materialIconRow}>
            <Image source={require('../assets/Do Not Wash.png')} style={styles.materialIcon} />
            <Text style={styles.materialIconText}>Dry clean with tetrachloroethylene</Text>
            </View>
            <View style={styles.materialIconRow}>
            <Image source={require('../assets/Iron.png')} style={styles.materialIcon} />
            <Text style={styles.materialIconText}>Iron at a maximum of 110°C/230°F</Text>
            </View>
        </View>
        <View style={styles.shipping}>
            <Image source={require('../assets/Shipping.png')} style={styles.shippingIcon} />
            <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
            <Text style={styles.shippingDate}>Estimated to be delivered on 09/11/2021 - 12/11/2021.
                
            </Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD TO BASKET</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
      
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    padding: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerButton: {
    marginHorizontal: 5,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  productDescription: {
    fontSize: 16,
    padding: 10,
  },
  productPrice: {
    fontSize: 24,
    color: '#ff6347',
    padding: 10,
  },
  productMaterials: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  productMaterialsText: {
    fontSize: 16,
    padding: 10,
  },
  materialIcons: {
    padding: 10,
  },
  materialIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  materialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  materialIconText: {
    fontSize: 16,
  },
  shipping: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  shippingIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  shippingText: {
    fontSize: 16,
  },
  shippingDate: {
    fontSize: 14,
    color: '#777',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProductDetailScreen;
