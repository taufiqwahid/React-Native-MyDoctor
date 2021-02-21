import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';
import {Firebase} from '../../config';
import Loading from '../../components/molecules/Loading';
import {showMessage} from 'react-native-flash-message';
import {alertMessage} from '../../utils/AlertMessage';
import {storeData} from '../../utils/localStorage';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    console.log('FORM = ', form);
    const data = {
      fullName: form.fullName,
      profession: form.profession,
      email: form.email,
    };

    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        data.uid = success.user.uid;
        Firebase.database()
          .ref(`users${success.user.uid}`)
          .set(data, (error) => {
            if (error) {
              alertMessage({message: error, type: 'danger', icon: 'danger'});
            } else {
              alertMessage({
                message: 'Success Register',
                type: 'success',
                icon: 'success',
              });
              setLoading(false);
              navigation.replace('UploadPhoto', data);
              setForm('reset');
            }
          });
      })
      .catch((error) => {
        setLoading(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
          icon: 'danger',
          color: 'white',
        });
        console.log('errorCode = ', errorCode);
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
