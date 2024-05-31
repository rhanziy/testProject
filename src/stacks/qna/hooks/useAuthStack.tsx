import {useNavigation, useRoute} from '@react-navigation/native';
import {
  QnAStackNavigationProp,
  QnAStackParamList,
  QnAStackRouteProp,
} from '../types';

export const useQnAStackNavigation = () => {
  return useNavigation<QnAStackNavigationProp>();
};

export const useQnAStackRoute = <T extends keyof QnAStackParamList>() => {
  return useRoute<QnAStackRouteProp<T>>();
};
