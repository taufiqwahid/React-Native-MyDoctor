import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = ({chatContent, chatTime}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.text}>{chatContent}</Text>
      </View>
      <Text style={styles.time}>{chatTime}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  page: {
    maxWidth: '70%',
    color: colors.text.secondary,
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 20,
  },
  container: {
    backgroundColor: colors.item.primary1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    padding: 12,
  },
  text: {
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
  time: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: fonts.primary[400],
    alignSelf: 'flex-end',
  },
});
