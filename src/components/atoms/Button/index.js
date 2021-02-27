import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';
import IconBtn from './iconBtn';
import IconOnly from './iconOnly';

const Button = ({type, title, onPress, icon, disable, active}) => {
  if (type === 'icon-btn') {
    return <IconBtn active={active} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable && onPress) {
    return (
      <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
        <Text style={styles.title(disable)}>{title}</Text>
      </TouchableOpacity>
    );
  } else if (disable || !onPress) {
    return (
      <View style={styles.container(disable)} onPress={onPress}>
        <Text style={styles.title(disable)}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <Text style={styles.title(disable)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable
      ? colors.button.secondary.background
      : colors.button.primary.background,
    borderRadius: 10,
    padding: 10,
  }),

  title: (disable) => ({
    color: disable ? colors.button.secondary.text : colors.button.primary.text,
    fontFamily: fonts.primary[600],
    fontSize: 18,
    textAlign: 'center',
  }),
});
