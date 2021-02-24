import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Header, List, Profile} from '../../components';
import {Firebase} from '../../config';
import {alertMessage} from '../../utils/AlertMessage';
import {getData} from '../../utils/localStorage';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({});
  const [photo, setPhoto] = useState(ILNullPhoto);
  useEffect(() => {
    getData('user').then((data) => {
      setProfile(data);
      if (typeof data.photo === 'string') {
        const source = {uri: data.photo};
        setPhoto(source);
      }
    });
  }, []);

  const logout = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        alertMessage({
          message: 'Bye,You will Logout!',
          icon: 'info',
          type: 'info',
        });
        setTimeout(() => {
          navigation.replace('GetStarted');
        }, 1000);
      })
      .catch((error) => {
        alertMessage({
          message: 'Failed Logout!',
          icon: 'danger',
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.replace('MainApp')} />
      <Profile
        name={profile.fullName}
        desc={profile.profession}
        photo={photo}
      />
      <List
        name="Edit Profile"
        icon="profile"
        desc="Last updated yesterday"
        type="icon-next"
        onPress={() => navigation.replace('UpdateProfile')}
      />
      <List
        name="Language"
        icon="translate"
        desc="Available 12 languages"
        type="icon-next"
        onPress={() => alert('ALERTTT')}
      />
      <List
        name="Give Us Rate"
        icon="start-give"
        desc="On Google Play Store"
        type="icon-next"
        onPress={() => alert('ALERTTT')}
      />
      <List
        name="Logout"
        icon="help"
        desc="Out of Account"
        type="icon-next"
        onPress={() => logout()}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({page: {backgroundColor: 'white', flex: 1}});
