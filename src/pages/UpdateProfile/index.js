import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <Profile type="icon-remove" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Gap height={26} />
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Profession" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Save Profile" onPress={() => navigation.goBack()} />
        <Gap height={48} />
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  content: {paddingHorizontal: 40},
});
