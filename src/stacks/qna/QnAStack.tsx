import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QnAStackParamList} from './types';
import QnAScreen from './screens/QnAScreen';
import {Pressable} from 'react-native';
import Text from '../../component/common/text/Text';
import useUser from '../../hooks/useUser';
import QuestionScreen from './screens/QuestionScreen';

const Stack = createNativeStackNavigator<QnAStackParamList>();

const QnAStack = () => {
  const {logout} = useUser();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerRight: () => (
          <Pressable onPress={logout}>
            <Text>로그아웃</Text>
          </Pressable>
        ),
      }}>
      <Stack.Screen
        name="QnAScreen"
        component={QnAScreen}
        options={{title: '질문 목록'}}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{title: '질문 작성'}}
      />
    </Stack.Navigator>
  );
};

export default QnAStack;
