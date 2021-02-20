import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';

const Input = ({label, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState(colors.input.secondary);
  const onFocus = () => {
    setBorder(colors.input.primary);
  };
  const onBlur = () => {
    setBorder(colors.input.secondary);
  };
  return (
    <View style={styles.page}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },

  input: (border) => ({
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.input.text.primary,
    marginTop: 6,
    borderWidth: 1,
    padding: 11,
    borderColor: border,
    borderRadius: 10,
  }),
});
