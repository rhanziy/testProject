import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {AuthStackNavigationScreenParams} from '../auth/types';
import {QnAStackNavigationScreenParams} from '../qna/types';

export type MainStackParamList = {
  QnAStack: QnAStackNavigationScreenParams;
  AuthStack: AuthStackNavigationScreenParams;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

export type MainStackScreenProp = NativeStackScreenProps<MainStackParamList>;

export type MainStackRouteProp<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;
