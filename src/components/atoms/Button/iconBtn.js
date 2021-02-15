import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconSend, IconSendActive} from '../../../assets/icon';
import {colors} from '../../../utils';

const IconBtn = ({disable}) => {
  return (
    <TouchableOpacity style={styles.page(disable)}>
      {disable && <IconSend />}
      {!disable && <IconSendActive />}
    </TouchableOpacity>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  page: (disable) => ({
    width: 45,
    height: 45,
    backgroundColor:
      disable === true
        ? colors.button.secondary.background
        : colors.button.blue.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 8,
    borderRadius: 10,
  }),
});
