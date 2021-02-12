import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DDokter1} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const ListDoctor = () => {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={DDokter1} />
      <View style={styles.doctor}>
        <Text style={styles.name}>Name Doctor</Text>
        <Text style={styles.chat}>Chatnya</Text>
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
