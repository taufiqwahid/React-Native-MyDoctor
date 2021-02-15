import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile Doctor" onPress={() => navigation.goBack()} />
      <Profile
        type="icon-female"
        name="Nairobi Putri Hayza"
        desc="Dokter Anak"
      />
      <Gap height={16} />
      <ProfileItem desc="Alumnus" name="Universitas Fajar" />
      <ProfileItem desc="Tempat Praktik" name="Rumah Sakit Umum, Bandung" />
      <ProfileItem desc="No. STR" name="0000116622081996" />
      <View style={styles.button}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chating')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  button: {marginHorizontal: 40, marginVertical: 23},
});
