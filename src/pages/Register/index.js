import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';

const Register = ({navigation}) => {
  return (
    <View>
      <Header title="Daftar Akun" onPress={() => (alert = 'asdasdas')} />
      <View style={styles.form}>
        <Gap height={40} />
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  form: {
    paddingBottom: 40,
    paddingHorizontal: 40,
    paddingTop: 0,
  },
});
