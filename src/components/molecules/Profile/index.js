import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconFemale, IconMale, IconRemove, ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, photo, type, onPress}) => {
  const Icon = () => {
    switch (type) {
      case 'icon-remove':
        return <IconRemove style={styles.iconAvatar} />;
      case 'icon-female':
        return <IconFemale style={styles.iconAvatar} />;
      case 'icon-male':
        return <IconMale style={styles.iconAvatar} />;

      default:
        return null;
    }
  };

  return (
    <View style={styles.page}>
      {type === 'icon-remove' ? (
        <TouchableOpacity style={styles.borderAvatar} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
        </TouchableOpacity>
      ) : (
        <View style={styles.borderAvatar}>
          <Image source={photo} style={styles.avatar} />
        </View>
      )}
      {type && <Icon />}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {alignItems: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  iconAvatar: {
    left: 230,
    top: 80,
    position: 'absolute',
  },
  borderAvatar: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    borderColor: colors.secondary,
  },
  name: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginTop: 2,
    marginBottom: 16,
  },
});
