import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo} from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderLeft = () => {
  const {goBack, canGoBack: _canGoBack, getState} = useNavigation();

  const canGoBack = useMemo(
    () => _canGoBack() && getState()?.type === 'stack',
    [_canGoBack, getState],
  );

  const back = useCallback(() => {
    if (canGoBack) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return (
    <Pressable onPress={back} hitSlop={8} sentry-label="헤더의 뒤로가기 아이콘">
      {canGoBack && <Icon name="arrow-back" size={20} />}
    </Pressable>
  );
};

export default HeaderLeft;
