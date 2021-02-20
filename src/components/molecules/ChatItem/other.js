import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DDokter1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.page}>
      <Image source={DDokter1} style={styles.avatar} />
      <View style={styles.wrapChat}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk? Ibu dokter,
            apakah memakan jeruk tiap hari itu buruk? Ibu dokter, apakah memakan
            jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.time}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  page: {
    maxWidth: '70%',
    color: colors.text.secondary,
    alignSelf: 'flex-start',
    marginRight: 16,
    marginTop: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: colors.default,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    padding: 12,
  },
  wrapChat: {marginLeft: 12},
  avatar: {height: 30, width: 30},
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.primary[400],
    alignSelf: 'flex-end',
  },
  time: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: fonts.primary[400],
    alignSelf: 'flex-start',
  },
});
