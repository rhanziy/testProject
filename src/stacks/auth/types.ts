import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackNavigationProp} from '../main/types';

export type AuthStackParamList = {
  AuthReadingScreen: undefined;
  LoginScreen: undefined;
};
export type AuthStackNavigationProp = CompositeNavigationProp<
  MainStackNavigationProp,
  NativeStackNavigationProp<AuthStackParamList>
>;

export type AuthStackNavigationScreenParams =
  NavigatorScreenParams<AuthStackParamList>;

export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;
