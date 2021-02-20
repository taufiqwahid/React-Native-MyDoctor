import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DDokter1, DDokter2, DDokter3, IconStarRated} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const RatedDoctor = ({specialis, name, rated, onPress}) => {
  const Rated = () => {
    const RatedIcon = [];
    for (let index = 0; index < rated; index++) {
      RatedIcon.push(<IconStarRated key={index} />);
    }
    return RatedIcon;
  };

  const Avatar = () => {
    switch (specialis) {
      case 'Dokter Psikiater':
        return <Image source={DDokter2} style={styles.avatar} />;

      case 'Dokter Anak':
        return <Image source={DDokter2} style={styles.avatar} />;

      case 'Dokter Umum':
        return <Image source={DDokter3} style={styles.avatar} />;

      case 'Dokter Obat':
        return <Image source={DDokter1} style={styles.avatar} />;

      default:
        return <Image source={DDokter1} style={styles.avatar} />;
    }
  };

  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Avatar />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialis}>{specialis}</Text>
      </View>
      <View style={styles.ratedDoctor}>
        <Rated />
      </View>
    </TouchableOpacity>
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
    fontFamily: fonts.primary[600],
  },
  specialis: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
  ratedDoctor: {
    flexDirection: 'row',
  },
});
