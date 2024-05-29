import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from '../../tabs/MainTab';
import LoginScreen from '../screen/LoginScreen';
import useUser from '../../hooks/useUser';
import HeaderLeft from '../../component/common/HeaderLeft';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const user = useUser();

  return (
    <Stack.Navigator initialRouteName="MainTab">
      {user ? (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Group>
      ) : (
        <Stack.Group
          screenOptions={{
            headerLeft: () => <HeaderLeft />,
          }}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: '로그인 하기'}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
