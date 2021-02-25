import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

import {colors} from '../../../utils/colors';
import Button from '../../atoms/Button';
import DarkProfile from './darkProfile';

const Header = ({title, name, specialis, onPress, photo, type}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile
        name={name}
        photo={photo}
        specialis={specialis}
        onPress={onPress}
        type={type}
      />
    );
  }
  return (
    <View style={styles.page(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: (type) => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: type === 'dark' ? colors.dark : 'white',
    height: 84,
    marginBottom: 4,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
  }),
  title: (type) => ({
    marginRight: 40,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? 'white' : colors.text.primary,
    flex: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
  }),
});
