import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';


const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <ActivityIndicator color={'blue'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
