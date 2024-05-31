import React, {forwardRef} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import {applyFont, FontParams} from './font';

export default forwardRef<RNTextInput, PropsWithRef>(
  (
    {
      children,
      style,
      size,
      weight,
      lineHeight,
      color,
      placeholderTextColor = '#aaa',
      ...props
    },
    ref,
  ) => (
    <View style={style}>
      <RNTextInput
        {...props}
        ref={ref}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        style={StyleSheet.flatten([
          applyFont({
            size,
            weight,
            lineHeight,
            color,
          }),
        ])}>
        {children}
      </RNTextInput>
    </View>
  ),
);

export interface TextInputProps extends RNTextInputProps, FontParams {
  showLength?: boolean;
}

interface PropsWithRef extends TextInputProps {
  ref: React.ForwardedRef<RNTextInput>;
}
