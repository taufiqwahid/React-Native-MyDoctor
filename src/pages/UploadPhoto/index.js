import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAddPhoto, IconRemove, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, Fonts} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {alertMessage} from '../../utils/AlertMessage';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getPhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 1, saveToPhotos: true},
      (response) => {
        if (!response.didCancel) {
          const source = {uri: response.uri};
          setPhoto(source);
          console.log(response);
          setHasPhoto(true);
        } else {
          alertMessage({
            message: 'Photo is default',
            type: 'info',
            icon: 'info',
          });
          setPhoto(ILNullPhoto);
          setHasPhoto(false);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.wrapperAvatar}
            onPress={() => getPhoto()}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemove style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.job}>Product Designer</Text>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.replace('MainApp')}
            title="Upload and Continue"
            disable={!hasPhoto}
          />
          <Gap height={30} />
          <Link
            onPress={() => navigation.replace('MainApp')}
            size={16}
            text="Skip for this"
            textAlign="center"
          />
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
    borderRadius: 110 / 2,
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
