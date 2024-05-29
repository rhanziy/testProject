import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainTabNavigationScreenParams} from '../../tabs/types';
import {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  MainTab: MainTabNavigationScreenParams;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

export type MainStackScreenProp = NativeStackScreenProps<MainStackParamList>;

export type MainStackRouteProp<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;
