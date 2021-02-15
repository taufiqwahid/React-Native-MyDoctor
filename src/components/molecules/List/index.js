import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconHelp,
  IconNext,
  IconProfile,
  IconStartGive,
  IconTranslate,
} from '../../../assets';

import {colors, Fonts} from '../../../utils';

const List = ({type, image, icon, name, desc, onPress}) => {
  const Icon = () => {
    switch (icon) {
      case 'profile':
        return <IconProfile />;
      case 'translate':
        return <IconTranslate />;
      case 'start-give':
        return <IconStartGive />;
      case 'help':
        return <IconHelp />;

      default:
        return null;
    }
  };
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      {icon ? <Icon /> : <Image style={styles.image} source={image} />}
      <View style={styles.doctor}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'icon-next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

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
  desc: {
    fontSize: 12,
    fontFamily: Fonts.primary[300],
    color: colors.text.secondary,
  },
});
