import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';

const DoctorProfile = ({navigation, route}) => {
  const [image, setImage] = useState();
  const [sex, setSex] = useState();
  const doctorDetail = route.params;

  useEffect(() => {
    doctorDetail.gender === 'pria'
      ? setSex('icon-male')
      : setSex('icon-female');
    const source = {uri: doctorDetail.photo};
    setImage(source);
  }, []);
  return (
    <View style={styles.page}>
      <Header title="Profile Doctor" onPress={() => navigation.goBack()} />
      <Profile
        type={sex}
        photo={image}
        name={doctorDetail.fullName}
        desc={doctorDetail.profession}
      />
      <Gap height={16} />
      <ProfileItem desc="Alumnus" name={doctorDetail.university} />
      <ProfileItem desc="Tempat Praktik" name={doctorDetail.hospital_address} />
      <ProfileItem desc="No. STR" name={doctorDetail.str_number} />
      <View style={styles.button}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chating', doctorDetail)}
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
