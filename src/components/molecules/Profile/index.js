import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DUser, IconFemale, IconMale, IconRemove} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const Profile = ({name, desc, type}) => {
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
      <View style={styles.borderAvatar}>
        <Image source={DUser} style={styles.avatar} />
      </View>
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
    left: 250,
    top: 90,
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
    fontFamily: Fonts.primary[600],
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: Fonts.primary[400],
    marginTop: 2,
    marginBottom: 16,
  },
});
