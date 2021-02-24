import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Firebase} from '../../config';
import {fonts} from '../../utils';
import {colors} from '../../utils/colors';
import {storeData} from '../../utils/localStorage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Firebase.database()
          .ref(`/users/${user.uid}`)
          .once('value')
          .then((data) => {
            storeData('user', data.val());
            navigation.replace('MainApp');
          });
      } else {
        navigation.replace('GetStarted');
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    marginTop: 20,
    fontSize: 20,
    color: colors.text.primary,
  },
});
