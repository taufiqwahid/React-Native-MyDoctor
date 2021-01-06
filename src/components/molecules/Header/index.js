import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets/illustration';
import {Fonts} from '../../../utils';

import {colors} from '../../../utils/colors';
import Button from '../../atoms/Button';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.page}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  title: {
    marginRight: 40,
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: colors.text.primary,
    flex: 1,
    textAlign: 'center',
  },
});
