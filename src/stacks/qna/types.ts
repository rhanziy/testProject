import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackNavigationProp} from '../main/types';

export type QnAStackParamList = {
  QnAScreen: undefined;
  QuestionScreen: undefined;
};
export type QnAStackNavigationProp = CompositeNavigationProp<
  MainStackNavigationProp,
  NativeStackNavigationProp<QnAStackParamList>
>;

export type QnAStackNavigationScreenParams =
  NavigatorScreenParams<QnAStackParamList>;

export type QnAStackRouteProp<T extends keyof QnAStackParamList> = RouteProp<
  QnAStackParamList,
  T
>;
