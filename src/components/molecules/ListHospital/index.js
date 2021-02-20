import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DHospital1, DHospital2, DHospital3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospital = ({index, title, address, name}) => {
  const Picture = () => {
    switch (index) {
      case 1:
        return <Image source={DHospital1} style={styles.image} />;
      case 2:
        return <Image source={DHospital2} style={styles.image} />;
      case 3:
        return <Image source={DHospital3} style={styles.image} />;

      default:
        return <Image source={DHospital1} style={styles.image} />;
    }
  };
  return (
    <View style={styles.page}>
      <Picture />
      <View>
        <Text style={styles.title}>{title}</Text>
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
