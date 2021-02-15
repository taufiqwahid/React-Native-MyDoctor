import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, Fonts} from '../../../utils';

const ProfileItem = ({desc, name}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  page: {
    borderBottomColor: colors.border.secondary,
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  desc: {
    color: colors.text.secondary,
    fontSize: 14,
    marginLeft: 16,
    fontFamily: Fonts.primary[400],
  },
  name: {
    marginTop: 6,
    marginBottom: 16,
    color: colors.text.primary,
    fontSize: 14,
    marginLeft: 16,
    fontFamily: Fonts.primary[600],
  },
});
