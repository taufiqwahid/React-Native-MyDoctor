import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconNext} from '../../../assets';

import {colors, Fonts} from '../../../utils';

const ListDoctor = ({type, image, name, chat, sex, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.doctor}>
        <Text style={styles.name}>{name}</Text>
        {sex === 'Wanita' || sex === 'Pria' ? (
          <Text style={styles.chat}>{sex}</Text>
        ) : (
          <Text style={styles.chat}>{chat}</Text>
        )}
      </View>
      {type === 'iconNext' && <IconNext />}
    </TouchableOpacity>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
    padding: 16,
    justifyContent: 'space-between',
  },
  image: {
    width: 46,
    height: 46,
  },
  doctor: {flex: 1, marginLeft: 12},
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: Fonts.primary[400],
  },
  chat: {
    fontSize: 12,
    fontFamily: Fonts.primary[300],
    color: colors.text.secondary,
  },
});
