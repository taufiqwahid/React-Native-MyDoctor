import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, Fonts} from '../../utils';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.wrapperAvatar}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Gap height={26} />
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.job}>Product Designer</Text>
        </View>
        <View style={styles.button}>
          <Button title="Upload and Continue" type="secondary" />
          <Gap height={30} />
          <Link size={16} text="Skip for this" textAlign="center" />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapperAvatar: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border.secondary,
    borderWidth: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    height: 110,
    width: 110,
  },
  addPhoto: {
    bottom: 0,
    right: 2,
    position: 'absolute',
  },
  name: {
    color: colors.text.primary,
    fontFamily: Fonts.primary[600],
    fontSize: 24,
  },
  job: {
    marginTop: 4,
    fontFamily: Fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 64,
  },
});
