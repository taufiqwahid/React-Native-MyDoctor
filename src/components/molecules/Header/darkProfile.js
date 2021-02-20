import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DDokter1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Button from '../../atoms/Button';

const DarkProfile = ({name, specialis, onPress, type}) => {
  return (
    <View style={styles.page(type)}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View>
        <Text style={styles.name(type)}>{name}</Text>
        <Text style={styles.specialis(type)}>{specialis}</Text>
      </View>
      <Image source={DDokter1} style={styles.profile} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  page: (type) => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dark,
    height: 107,
    justifyContent: 'space-between',
    marginBottom: 4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }),
  name: (type) => ({
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: 'white',
    marginLeft: 16,
    textAlign: 'center',
  }),
  specialis: (type) => ({
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginLeft: 16,
    marginTop: 6,
    textAlign: 'center',
  }),
  profile: {
    height: 46,
    width: 46,
    marginRight: 16,
  },
});
