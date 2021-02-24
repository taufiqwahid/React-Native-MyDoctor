import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import Loading from '../../components/molecules/Loading';
import {Firebase} from '../../config';
import {fonts, useForm} from '../../utils';
import {alertMessage} from '../../utils/AlertMessage';
import {colors} from '../../utils/colors';
import {storeData} from '../../utils/localStorage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const stateGlobal = useSelector((state) => state);

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const signIn = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((response) => {
        Firebase.database()
          .ref(`/users/${response.user.uid}/`)
          .once('value')
          .then((data) => {
            if (data) {
              dispatch({type: 'SET_LOADING', value: false});
              storeData('user', data.val());
              setForm('reset');
              navigation.replace('MainApp');
            }
          });
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        var errorMessage = error.message;
        alertMessage({message: errorMessage, type: 'danger', icon: 'danger'});
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <View style={styles.form}>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => {
              setForm('email', value);
            }}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link size={12} text="Forgot My Password" />
          <Gap height={40} />
          <Button title="Sign In" onPress={() => signIn()} />
        </View>
        <Gap height={30} />
        <Link
          onPress={() => navigation.replace('Register')}
          size={16}
          text="Create New Account"
          textAlign="center"
        />
      </View>
      {stateGlobal.loading && <Loading />}
    </>
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
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 153,
    color: colors.text.primary,
  },
  form: {
    marginTop: 40,
  },
});
