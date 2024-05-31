import {useNavigation, useRoute} from '@react-navigation/native';
import {
  AuthStackNavigationProp,
  AuthStackParamList,
  AuthStackRouteProp,
} from '../types';

export const useAuthStackNavigation = () => {
  return useNavigation<AuthStackNavigationProp>();
};

export const useAuthStackRoute = <T extends keyof AuthStackParamList>() => {
  return useRoute<AuthStackRouteProp<T>>();
};
