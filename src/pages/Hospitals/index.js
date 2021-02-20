import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {hospitals, ILLBGHospital} from '../../assets';
import ListHospital from '../../components/molecules/ListHospital';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILLBGHospital} style={styles.bgImage}>
        <Text style={styles.textTitle}>Nearby Hospitals</Text>
        <Text style={styles.textStock}>3 Tersedia</Text>
      </ImageBackground>

      <View style={styles.content}>
        <ScrollView>
          {hospitals.data.map((item) => {
            return (
              <ListHospital
                index={item.id}
                key={item.id}
                name={item.name}
                title={item.title}
                address={item.address}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.dark, flex: 1},
  bgImage: {
    height: 240,
    alignItems: 'center',
    paddingTop: 30,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
  textStock: {
    color: 'white',
    fontSize: 14,

    fontFamily: fonts.primary[300],
  },
  content: {
    marginTop: -20,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 16,
  },
  gap: {
    backgroundColor: 'white',
  },
});
