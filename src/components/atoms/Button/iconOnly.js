import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconBackDark, IconBackLight} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark style={styles.icon} />;
    }
    if (icon === 'back-light') {
      return <IconBackLight style={styles.icon} />;
    }
    return <IconBackDark style={styles.icon} />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({icon: {marginLeft: 16}});
