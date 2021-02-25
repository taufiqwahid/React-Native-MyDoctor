import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListHospital = ({image, hospital, address, name}) => {
  return (
    <View style={styles.page}>
      <Image source={{uri: image}} style={styles.image} />;
      <View>
        <Text style={styles.title}>{hospital}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    padding: 16,
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 16,
  },
  title: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  address: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[300],
  },
});
