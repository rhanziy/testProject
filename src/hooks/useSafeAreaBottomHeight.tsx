import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useSafeAreaBottomHeight = () => {
  const insets = useSafeAreaInsets();

  if (Platform.OS === 'ios' && DeviceInfo.hasNotch()) {
    return {height: 84 - insets.bottom, paddingBottom: 34 - insets.bottom};
  }

  return {height: 64, paddingBottom: 12};
};

export default useSafeAreaBottomHeight;
