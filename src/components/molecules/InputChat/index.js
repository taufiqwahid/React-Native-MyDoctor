import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import Button from '../../atoms/Button';

const InputChat = ({value, onChangeText, onPress}) => {
  return (
    <View style={styles.page}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder=""
      />
      <Button type="icon-btn" onPress={onPress} active={true} />
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
    fontFamily: fonts.primary[400],
    borderRadius: 10,
    marginRight: 10,
    color: colors.text.secondary,
  },
});
