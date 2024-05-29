import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {MainStackNavigationProp} from '../stacks/main/types';

export type MainTabParamList = {
  HomeScreen: undefined;
  MyPageScreen: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  MainStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

export type MainTabRouteProp<T extends keyof MainTabParamList> = RouteProp<
  MainTabParamList,
  T
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;
