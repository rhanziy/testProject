import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthReadingScreen from './screens/login/AuthReadingScreen';
import {AuthStackParamList} from './types';
import LoginScreen from './screens/login/LoginScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name="AuthReadingScreen"
        component={AuthReadingScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: '로그인'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
