import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils/colors';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <View style={styles.form}>
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={10} />
        <Link size={12} text="Forgot My Password" />
        <Gap height={40} />
        <Button title="Sign In" />
      </View>
      <Gap height={30} />
      <Link size={16} text="Create New Account" textAlign="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 40,
    flex: 1,
    // justifyContent: 'space-between',
  },
  title: {
    marginTop: 40,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    maxWidth: 153,
    color: colors.text.primary,
  },
  form: {
    marginTop: 40,
  },
});
