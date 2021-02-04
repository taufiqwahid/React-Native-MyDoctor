import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DDokter1, IconStarRated} from '../../../assets';
import {colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';

const RatedDoctor = () => {
  return (
    <View style={styles.page}>
      <Image source={DDokter1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.ratedDoctor}>
        <IconStarRated />
        <IconStarRated />
        <IconStarRated />
        <IconStarRated />
        <IconStarRated />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  profile: {
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    marginBottom: 2,
    fontFamily: Fonts.primary[600],
  },
  category: {
    color: colors.text.secondary,
    fontFamily: Fonts.primary[400],
    fontSize: 12,
  },
  ratedDoctor: {
    flexDirection: 'row',
  },
});
