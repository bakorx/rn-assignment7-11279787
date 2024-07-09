import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import CustomDrawerContent from './components/CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="ProductList"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'ProductList') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Checkout') {
          iconName = focused ? 'cart' : 'cart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen
      name="ProductList"
      component={ProductList}
      options={{ headerShown: false, title: 'Home' }}
    />
    <Tab.Screen
      name="Checkout"
      component={Checkout}
      options={{ headerShown: false, title: 'Checkout' }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'back',
        overlayColor: 'transparent',
        drawerStyle: {
          width: '60%', // Adjust this to control the width of the drawer
        },
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
