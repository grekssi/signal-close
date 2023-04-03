import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import ImagePickerScreen from './screens/ImagePickerScreen';
import ImagesScreen from './screens/ImagesScreen';
import ImageUploadedScreen from './screens/ImageUploadedScreen';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="ImageUploaded" component={ImageUploadedScreen} options={{ presentation: "fullScreenModal", headerShown: false }}/>

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ImagePicker" component={ImagePickerScreen} />

          <Stack.Screen name="Images" component={ImagesScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
