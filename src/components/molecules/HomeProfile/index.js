import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DUser} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.page}>
      <Image source={DUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profetion}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 46,
    width: 46,
    marginRight: 12,
  },
  name: {
    fontFamily: Fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
  },
  profetion: {
    fontFamily: Fonts.primary[600],
    color: colors.text.secondary,
    fontSize: 12,
  },
});
