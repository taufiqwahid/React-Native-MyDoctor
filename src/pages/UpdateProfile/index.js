import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {alertMessage} from '../../utils/AlertMessage';
import {getData, storeData} from '../../utils/localStorage';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';
import Loading from '../../components/molecules/Loading';
import {colors, fonts} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getData('user').then((data) => {
      setProfile(data);
      const source = {uri: data.photo};
      setPhoto(source);
    });
  }, []);
  const [photoForDB, setPhotoForDB] = useState();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [loading, setLoading] = useState(false);
  const user = Firebase.auth().currentUser;

  const updatePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
        quality: 0.5,
      },
      (response) => {
        if (response.didCancel) {
          alertMessage({
            message: 'Photo is default',
            type: 'info',
            icon: 'info',
          });
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
        }
      },
    );
  };

  const changeText = (key, value) => {
    setProfile({...profile, [key]: value});
  };

  const updatePassword = () => {
    const credential = Firebase.auth.EmailAuthProvider.credential(
      user.email,
      password,
    );
    user
      .reauthenticateWithCredential(credential)
      .then(function () {
        user
          .updatePassword(newPassword)
          .then(function () {
            setLoading(false);
            alertMessage({
              message: 'Update password Success ',
              icon: 'info',
              type: 'info',
            });
          })
          .catch(function (error) {
            setLoading(false);
            alertMessage({
              message: error.message,
              icon: 'danger',
              type: 'danger',
            });
          });
      })
      .catch(function (error) {
        setLoading(false);
        alertMessage({
          message: error.message,
          icon: 'danger',
          type: 'danger',
        });
      });
  };

  const updateData = () => {
    profile.photo = photoForDB ? photoForDB : profile.photo;
    Firebase.database()
      .ref(`users/${user.uid}/`)
      .update(profile, () => {
        storeData('user', profile);
        setLoading(false);
        alertMessage({
          message: 'Updated Profile',
          icon: 'success',
          type: 'success',
        });
        storeData('user', profile);
        navigation.replace('MainApp');
      });
  };

  const updateProfile = () => {
    console.log(password.length);
    setLoading(true);
    if (password.length > 0 && newPassword.length > 0) {
      if (password.length < 6 && newPassword.length < 6) {
        setLoading(false);
        alertMessage({
          message: 'Password must be 6 characters or more',
          icon: 'danger',
          type: 'danger',
        });
      } else {
        updatePassword();
        updateData();
      }
    } else {
      updateData();
    }
  };

  return (
    <>
      <View style={styles.page}>
        <Header
          title="Edit Profile"
          onPress={() => navigation.replace('UserProfile')}
        />
        <Profile
          type="icon-remove"
          photo={photo}
          onPress={() => updatePhoto()}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Profession"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email Address" value={profile.email} disable />
          <Gap height={35} />
          <Text style={styles.text}>Enter if want update your password</Text>
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            textContentType="password"
            placeholder="Current Password"
            secureTextEntry
          />
          <Input
            value={newPassword}
            onChangeText={(value) => setNewPassword(value)}
            textContentType="newPassword"
            placeholder="New Password"
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={() => updateProfile()} />
          <Gap height={48} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  content: {paddingHorizontal: 40},
  text: {
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.menuActive,
  },
});
