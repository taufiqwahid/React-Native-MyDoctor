import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DDokter1} from '../../assets';
import Header from '../../components/molecules/Header';
import ListDoctor from '../../components/molecules/ListDoctor';

const ChooseDoctor = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        name="taufiq"
        sex="Wanita"
        image={DDokter1}
        type="iconNext"
        onPress={() => navigation.navigate('Chating')}
      />
    </ScrollView>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({});
