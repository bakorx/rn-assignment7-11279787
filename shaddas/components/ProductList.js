import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/actions';

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const url = 'https://fakestoreapi.com/products';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.product} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <TouchableOpacity style={styles.addButton} onPress={() => dispatch(addItemToCart(item))}>
          <Image source={require('../assets/add_circle.png')} style={styles.addButtonImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
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
        <View style={styles.titleRow}>
          <Text style={styles.title}>OUR STORY</Text>
          <View style={styles.titleIcons}>
            <TouchableOpacity style={styles.titleButton}>
              <Image source={require('../assets/Listview.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleButton}>
              <Image source={require('../assets/Filter.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.productList}
          numColumns={2}
        />
      </View>
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
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Arial',
  },
  titleIcons: {
    flexDirection: 'row',
  },
  titleButton: {
    marginHorizontal: 5,
    padding: 10,
  },
  productList: {
    paddingHorizontal: 10,
  },
  product: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 230,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'transparent',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
});

export default ProductList;
