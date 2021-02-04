import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLDokterUmum} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const DoctorCategory = () => {
  return (
    <View style={styles.page}>
      <ILLDokterUmum style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.textButuh}>Saya butuh</Text>
        <Text style={styles.textDokter}>dokter umum</Text>
      </View>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  page: {
    borderRadius: 10,
    backgroundColor: colors.item.primary1,
    width: 100,
    height: 130,
    marginRight: 10,
    marginTop: 16,
  },
  image: {
    marginLeft: 12,
    marginTop: 12,
    width: 46,
    height: 46,
  },
  text: {
    marginTop: 28,
    marginLeft: 12,
    marginBottom: 12,
  },
  textButuh: {
    color: colors.text.primary,
    fontFamily: Fonts.primary[300],
    fontSize: 12,
  },
  textDokter: {
    color: colors.text.primary,
    fontFamily: Fonts.primary[600],
    fontSize: 12,
  },
});
