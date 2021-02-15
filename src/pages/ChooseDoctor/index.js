import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DDokter1} from '../../assets';
import Header from '../../components/molecules/Header';
import List from '../../components/molecules/List';

const ChooseDoctor = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        name="taufiq"
        desc="Wanita"
        image={DDokter1}
        type="icon-next"
        onPress={() => navigation.navigate('Chating')}
      />
    </ScrollView>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({});
