import {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import styled from 'styled-components';

const CustomView = styled(View)`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  justify-content: center;
`;

const Container = ({children, style}: PropsWithChildren<ContainerProps>) => {
  return <CustomView style={style}>{children}</CustomView>;
};

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
}

export default Container;
