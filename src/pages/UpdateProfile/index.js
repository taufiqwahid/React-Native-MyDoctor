import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {alertMessage} from '../../utils/AlertMessage';
import {getData, storeData} from '../../utils/localStorage';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';
import Loading from '../../components/molecules/Loading';

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
  const [password, setPassword] = useState();
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [loading, setLoading] = useState(false);

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
    setPassword(value);
  };

  const updateProfile = () => {
    setLoading(true);
    const user = Firebase.auth().currentUser;
    profile.photo = photoForDB;

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
          <Gap height={24} />
          <Input
            label="Update Password"
            value={password}
            onChangeText={(value) => changeText('password', value)}
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
});
