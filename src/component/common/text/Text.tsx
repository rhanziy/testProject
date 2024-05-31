import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import {MarginProps} from '../../../@types';
import {applyFont, FontParams} from './font';

const Text = ({
  children,
  style,
  weight,
  size,
  lineHeight,
  color,
  margin,
  marginRight,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginTop,
  marginVertical,
  ...props
}: PropsWithChildren<Props & FontParams>) => {
  return (
    <RNText
      {...props}
      style={StyleSheet.flatten([
        applyFont({
          size,
          weight,
          lineHeight,
          color,
        }),
        {
          margin,
          marginRight,
          marginBottom,
          marginHorizontal,
          marginLeft,
          marginTop,
          marginVertical,
        },
        style,
      ])}>
      {children}
    </RNText>
  );
};

export default Text;

interface Props extends TextProps, MarginProps {}
