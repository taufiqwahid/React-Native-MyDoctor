import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DHospital1} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.page}>
      <Image source={DHospital1} style={styles.image} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Paccinongan Sejahtera 20</Text>
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
    fontFamily: Fonts.primary[400],
  },
  address: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: Fonts.primary[300],
  },
});
