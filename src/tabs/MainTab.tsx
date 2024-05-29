import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MyPageScreen from './screens/MyPageScreen';
import useSafeAreaBottomHeight from '../hooks/useSafeAreaBottomHeight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AiChatScreen from './screens/AiChatScreen';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const {height, paddingBottom} = useSafeAreaBottomHeight();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height,
          paddingBottom,
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#d4d4d4',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AiChatScreen"
        component={AiChatScreen}
        options={{
          title: '챗봇',
          tabBarIcon: ({color, size}) => (
            <AwesomeIcon name="robot" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          title: 'MY',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
