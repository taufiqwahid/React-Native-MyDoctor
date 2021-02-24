import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {useForm} from '../../utils';
import {Firebase} from '../../config';
import Loading from '../../components/molecules/Loading';
import {showMessage} from 'react-native-flash-message';
import {alertMessage} from '../../utils/AlertMessage';
import {useDispatch, useSelector} from 'react-redux';
import {ILNullPhoto} from '../../assets';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({});

  const stateGlobal = useSelector((state) => state);
  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    const data = {
      fullName: form.fullName,
      profession: form.profession,
      email: form.email,
      photo: ILNullPhoto,
    };

    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((response) => {
        data.uid = response.user.uid;
        Firebase.database()
          .ref(`users/${response.user.uid}/`)
          .set(data, (error) => {
            if (error) {
              alertMessage({message: error, type: 'danger', icon: 'danger'});
            } else {
              alertMessage({
                message: 'Success Register',
                type: 'success',
                icon: 'success',
              });
              dispatch({type: 'SET_LOADING', value: false});
              navigation.replace('UploadPhoto', data);
              setForm('reset');
            }
          });
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        var errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
          icon: 'danger',
          color: 'white',
        });
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
      {stateGlobal.loading && <Loading />}
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
