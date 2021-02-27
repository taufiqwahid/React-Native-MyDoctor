import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconSend, IconSendActive} from '../../../assets/icon';
import {colors} from '../../../utils';

const IconBtn = ({active, onPress}) => {
  return (
    <TouchableOpacity style={styles.page(active)} onPress={onPress}>
      {active && <IconSend />}
      {!active && <IconSendActive />}
    </TouchableOpacity>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  page: (active) => ({
    width: 45,
    height: 45,
    backgroundColor:
      active === false
        ? colors.button.secondary.background
        : colors.button.blue.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 8,
    borderRadius: 10,
  }),
});
