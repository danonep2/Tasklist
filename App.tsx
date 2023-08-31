import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from "./src/components";

const Stack = createNativeStackNavigator();

const App = () => {
  return (<SafeAreaView style={styles.container}>
    <Home/>
    <StatusBar  barStyle={'dark-content'} backgroundColor={'white'}/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      paddingTop: 15,
      flex: 1
  },
});


export default App;