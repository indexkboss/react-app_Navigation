// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SettingsScreen from './screens/SettingsScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import HomeScreen from './screens/HomeScreen';
// import { Ionicons } from '@expo/vector-icons';
// import AppBar from './screens/AppBar';
// import { SafeAreaProvider, SafeAreaView } from
// 'react-native-safe-area-context';





// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


// // --- Navigation par pile ---
// function HomeStack() {
// return (
// <Stack.Navigator screenOptions={{ headerShown: true }}>
// <Stack.Screen name="Accueil" component={HomeScreen}  options={{
// headerStyle: { backgroundColor: '#007AFF' }, headerTintColor: '#fff', headerTitleStyle: {
// fontWeight: 'bold' },
// }}/>
// <Stack.Screen name="Details" component={DetailsScreen}  options={{
// headerStyle: { backgroundColor: '#007AFF' }, headerTintColor: '#fff', headerTitleStyle: {
// fontWeight: 'bold' },
// }}/>
// </Stack.Navigator>
// );
// }
// // --- Navigation par onglets ---
// export default function App() {
// return (
// <SafeAreaProvider>
// <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
// <NavigationContainer>


//           {/* Top Custom AppBar */}
//           <AppBar />


//    <Tab.Navigator
// screenOptions={{
// headerShown: false, tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'gray',
// tabBarStyle: { backgroundColor: '#f0f0f0' }, 
// tabBarLabelStyle: { fontSize: 14 }, 
// }}>

// <Tab.Screen name="Maison" component={HomeStack} options={{ tabBarIcon: ({ color, size
// }) => ( <Ionicons name="home" size={size} color={color} /> ),
// }} />
// <Tab.Screen name="Details" component={DetailsScreen} options={{ tabBarIcon: ({
// color, size }) => ( <Ionicons name="information-circle" size={size} color={color} /> ),
// }} />
// <Tab.Screen name="Paramètres" component={SettingsScreen} options={{ tabBarIcon: ({
// color, size }) => ( <Ionicons name="settings" size={size} color={color} /> ),
// }} />


//     </Tab.Navigator> 


//           {/* Bottom Tabs */}
          
          
// </NavigationContainer>
// </SafeAreaView>
// </SafeAreaProvider>
// );
// }




//**************TP5**************************** */
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import { useContext } from "react";
function RootNavigator() {
const { user } = useContext(AuthContext);
return user ? <AppDrawer /> : <LoginScreen />;
}
export default function App() {
return (
 <AuthProvider>
 <NavigationContainer>
 <RootNavigator />
 </NavigationContainer>
 </AuthProvider>
);
}


