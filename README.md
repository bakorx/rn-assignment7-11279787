# rn-assignment7-ID-11279787
## Overview
This project is a simple e-commerce application built with React Native that allows users to view a list of products, see detailed information about each product, add products to their cart, and view and remove items from their cart. The application fetches product data from an external API, uses Redux for state management, and stores cart data locally using AsyncStorage.

## Design Choices
1. React Native
Reason: React Native is used to build cross-platform mobile applications using JavaScript. It allows for fast development cycles and native performance.
Implementation: The project is structured into components that handle different parts of the application, such as the product list, product detail, and cart.
2. Redux for State Management
Reason: Redux is chosen to manage the state of the cart across different components. It provides a predictable state container and makes the state management scalable and easy to debug.
Implementation: Actions and reducers are defined for adding and removing items from the cart. The Redux store is configured and provided to the entire application using the Provider component from react-redux.
3. External API for Product Data
Reason: Using an external API allows for dynamic data fetching, making the application more flexible and easier to update without changing the codebase.
Implementation: fetch is used to get product data from the external API, and the data is stored in the local state of the ProductList component.
4. AsyncStorage for Local Data Storage
Reason: AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It allows us to store the cart data locally on the user's device.
Implementation: Cart data is saved to and retrieved from AsyncStorage whenever the cart is updated. This ensures that the cart persists even when the app is closed and reopened.
Project Structure
redux
actions.js: Defines actions for adding and removing items from the cart.
reducer.js: Defines the reducer to handle cart actions and update the state accordingly.
store.js: Configures the Redux store.
components
ProductList.js: Fetches and displays a list of products from an external API.
ProductDetail.js: Displays detailed information about a selected product and allows adding it to the cart.
Cart.js: Displays items in the cart and allows removing items.
api.
App.js: Configures the navigation and sets up the Redux provider.
## Data Storage
#### AsyncStorage
AsyncStorage is used to store the cart items locally on the device. This ensures that the cart persists across app sessions.

#### Saving to AsyncStorage:
Whenever an item is added to or removed from the cart, the updated cart state is saved to AsyncStorage.

## Screenshots 
### Product List Screen
![products](<shaddas/assets/products list screenshot.jpg>)

### Product Details Screen
![details 1](<shaddas/assets/product details 1.jpg>)
![details 2](<shaddas/assets/product details 2.jpg>)

### Checkout Screen
![checkout](<shaddas/assets/checkout screenshot.jpg>)

### Menu Bar
![menu bar](<shaddas/assets/menu screenshot.jpg>)
