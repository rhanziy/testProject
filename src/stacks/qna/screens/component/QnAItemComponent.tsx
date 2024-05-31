import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {QnAItem} from '../../../../hooks/useQnA';

const QnAItemComponent = ({answer}: QnAItem) => {
  return <></>;
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  question: {
    fontWeight: 'bold',
  },
  answer: {
    marginTop: 5,
  },
});

export default QnAItemComponent;
