import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';
import IconOnly from './iconOnly';

const Button = ({type, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.primary.text
        : colors.button.primary.background,
    borderRadius: 10,
    padding: 10,
  }),

  title: (type) => ({
    color:
      type === 'secondary' ? colors.text.primary : colors.button.primary.text,
    fontFamily: 'Nunito-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
  }),
});
