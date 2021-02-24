import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAddPhoto, IconRemove, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {alertMessage} from '../../utils/AlertMessage';
import {Firebase} from '../../config';
import {storeData} from '../../utils/localStorage';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState();
  const data = route.params;
  const getPhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
        quality: 0.8,
      },
      (response) => {
        if (response.didCancel) {
          alertMessage({
            message: 'Photo is default',
            type: 'info',
            icon: 'info',
          });
          setPhoto(ILNullPhoto);
          setHasPhoto(false);
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const saveAndContinue = () => {
    data.photo = photoForDB;
    Firebase.database().ref(`users/${uid}/`).update({
      photo: photoForDB,
    });
    storeData('user', data);
    navigation.replace('MainApp');
  };

  const skipAndContinue = () => {
    storeData('user', data);
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1000);
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
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.job}>{profession}</Text>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => saveAndContinue()}
            title="Upload and Continue"
            disable={!hasPhoto}
          />
          <Gap height={30} />
          <Link
            onPress={() => skipAndContinue()}
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
    fontFamily: fonts.primary[600],
    fontSize: 24,
    textTransform: 'capitalize',
  },
  job: {
    marginTop: 4,
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 64,
  },
});
