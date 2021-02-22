import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List, Profile} from '../../components';
import {getData} from '../../utils/localStorage';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getData('user').then((data) => {
      setProfile(data);
    });
  }, []);
  const photo = {uri: profile.photo};
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
        name="Help Center"
        icon="help"
        desc="Read our guidelines"
        type="icon-next"
        onPress={() => alert('ALERTTT')}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({page: {backgroundColor: 'white', flex: 1}});
