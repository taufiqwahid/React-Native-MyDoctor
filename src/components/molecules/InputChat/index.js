import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, Fonts} from '../../../utils';
import Button from '../../atoms/Button';

const InputChat = () => {
  return (
    <View style={styles.page}>
      <TextInput style={styles.input} placeholder="taufiqwahid" />
      <Button type="icon-btn" disable={true} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 26,
  },
  input: {
    flex: 1,
    backgroundColor: colors.input.secondary,
    height: 45,
    padding: 14,
    fontSize: 14,
    fontFamily: Fonts.primary[400],
    borderRadius: 10,
    marginRight: 10,
  },
});
