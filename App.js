import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ProfilerScreen() {

return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profiler</Text>
  </View>
);
}

function MyclassScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Myclass!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profiler" component={ProfilerScreen} />
        <Tab.Screen name="Myclass" component={MyclassScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} option={{title: 'Gallery'}} />
        <Stack.Screen name="showImage" component={showImage} option={{HeadersShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


