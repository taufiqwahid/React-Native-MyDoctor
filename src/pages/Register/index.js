import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {useForm} from '../../utils';
import {Firebase} from '../../config';
import Loading from '../../components/molecules/Loading';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  useState;

  const onContinue = () => {
    setLoading(true);
    console.log(form);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        console.info(success);
      })
      .catch((error) => {
        setLoading(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        console.warn('errorCode = ', errorCode);
        console.error('errorMessage = ', errorMessage);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Profession"
            value={form.profession}
            onChangeText={(value) => setForm('profession', value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button
            title="Continue"
            // onPress={() => navigation.replace('UploadPhoto')}

            onPress={() => onContinue()}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  form: {
    paddingBottom: 40,
    paddingHorizontal: 40,
    paddingTop: 0,
  },
});
