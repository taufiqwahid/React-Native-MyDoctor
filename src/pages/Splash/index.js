import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Firebase} from '../../config';
import {fonts} from '../../utils';
import {colors} from '../../utils/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 1000);
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
