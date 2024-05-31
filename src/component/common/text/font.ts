import {ColorValue, Platform, TextStyle} from 'react-native';

export function applyFont({
  size: fontSize = 14,
  weight: fontWeight = '400',
  lineHeight: lineHeightMultiples = 1.2,
  color = '#333333',
}: FontParams): TextStyle {
  const lineHeight = fontSize * lineHeightMultiples;

  if (Platform.OS === 'ios') {
    return {
      fontFamily: 'Pretendard',
      fontWeight,
      fontSize,
      lineHeight,
      color,
    };
  }

  let fontFamily = null;

  switch (fontWeight) {
    case '400':
      fontFamily = 'Pretendard-Regular';
      break;
    case '500':
      fontFamily = 'Pretendard-Medium';
      break;
    case '600':
      fontFamily = 'Pretendard-SemiBold';
      break;
    case '700':
      fontFamily = 'Pretendard-Bold';
      break;
  }

  return {
    fontFamily,
    fontSize,
    lineHeight,
    color,
    includeFontPadding: false,
    textAlignVertical: 'center',
    padding: 0,
    margin: 0,
  };
}

export interface FontParams {
  size?: number;
  /**
   * 400 : Regular
   *
   * 500 : Medium
   *
   * 600 : SemiBold
   *
   * 700 : Bold
   */
  weight?: '400' | '500' | '600' | '700';
  lineHeight?: number;
  color?: ColorValue | undefined;
}
