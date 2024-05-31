import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import Text from '../text/Text';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback, useEffect, useRef, useState} from 'react';
import useInterval from '../../../hooks/useInterval';
import {useRecoilValue} from 'recoil';
import QLoadingAtom from '../../atom/QLoadingAtom';

const QLoader = () => {
  const modal = useRecoilValue(QLoadingAtom);

  const ref = useRef<FlatList>(null);
  const images = [
    require('../../../../asset/images/BANNER_01.png'),
    require('../../../../asset/images/BANNER_02.png'),
  ];

  const [pageIndex, setPageIndex] = useState<number>(0);

  const handler = useCallback(() => {
    if (images?.length) {
      ref.current?.scrollToIndex({
        index: (pageIndex + 1) % images.length,
      });
    }
  }, [pageIndex, images]);

  const {restart, stop} = useInterval(handler, 2000);

  useEffect(() => {
    restart();
    return stop;
  }, [restart, stop]);

  const onScroll = useCallback(
    (evt: NativeSyntheticEvent<NativeScrollEvent>) => {
      setPageIndex(Math.round(evt.nativeEvent.contentOffset.x / 320));
    },
    [],
  );
  return (
    <>
      {modal && (
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            backgroundColor: 'black',
            opacity: 0.7,
            zIndex: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: 320,
              height: 320,
              borderRadius: 18,
              zIndex: 20,
              overflow: 'hidden',
            }}>
            <FlatList
              data={images}
              ref={ref}
              horizontal
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              renderItem={({item}) => (
                <Image
                  style={styles.image}
                  source={item}
                  resizeMode="contain"
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.indicatorContainer}>
              {images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    pageIndex === index && styles.activeIndicator,
                  ]}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text color={'white'} size={20} weight="500">
              잠시만 기다려주세요.
            </Text>
            <Text color={'white'} size={20} weight="500">
              오케이닥 AI가 답변을 생성중이에요.
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    backgroundColor: '#858585',
    width: 5,
    height: 5,
    borderRadius: 12,
    marginRight: 5,
  },
  activeIndicator: {
    width: 18,
    backgroundColor: 'white',
  },
  image: {
    width: 320,
    height: 320,
  },
});

export default QLoader;
