import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {getData} from '../../../utils/localStorage';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    getData('user').then((response) => {
      setProfile(response);
    });
  }, []);
  return (
    <TouchableOpacity onPress={onPress} style={styles.page}>
      <Image source={{uri: profile.photo}} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  profession: {
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    fontSize: 12,
    textTransform: 'capitalize',
  },
});
