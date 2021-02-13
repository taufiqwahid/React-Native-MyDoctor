import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {colors, Fonts} from '../../../utils';

const ListDoctor = ({image, name, chat}) => {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={image} />
      <View style={styles.doctor}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
    padding: 16,
  },
  image: {
    width: 46,
    height: 46,
  },
  doctor: {marginLeft: 12},
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: Fonts.primary[400],
  },
  chat: {
    fontSize: 12,
    fontFamily: Fonts.primary[300],
    color: colors.text.secondary,
  },
});
