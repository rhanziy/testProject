import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useUser from '../../hooks/useUser';
import AuthStack from '../auth/AuthStack';
import {MainStackParamList} from './types';
import {useEffect, useState} from 'react';
import authStorage from '../../component/storage/authStorage';
import QnAStack from '../qna/QnAStack';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const {user} = useUser();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await authStorage.get('accessToken');
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        {user || accessToken ? (
          <Stack.Screen name="QnAStack" component={QnAStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStack;
