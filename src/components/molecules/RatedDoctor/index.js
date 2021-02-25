import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconStarRated} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const RatedDoctor = ({specialis, name, rated, photo, onPress}) => {
  const [image, setImage] = useState();

  useEffect(() => {
    const source = {uri: photo};
    setImage(source);
  }, []);

  const Rated = () => {
    const RatedIcon = [];
    for (let index = 0; index < rated; index++) {
      RatedIcon.push(<IconStarRated key={index} />);
    }
    return RatedIcon;
  };

  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image source={image} style={styles.avatar} />
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
    textTransform: 'capitalize',
  },
  specialis: {
    textTransform: 'capitalize',
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
  ratedDoctor: {
    flexDirection: 'row',
  },
});
