import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, Fonts} from '../../utils';

const Doctors = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <HomeProfile />
          <Text style={styles.textKonsultasi}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.DoctorCategory}>
                <Gap width={16} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>

          <Text>Top Rated Doctor</Text>
          <Gap height={16} />
          <View>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
          </View>
          <Gap height={16} />
          <Text>Good News</Text>
          <Gap height={16} />
          <View>
            <NewsItem />
            <View style={styles.lineNews} />
            <NewsItem />
            <View style={styles.lineNews} />
            <NewsItem />
            <View style={styles.lineNews} />
          </View>
          <Gap height={16} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapper: {
    marginHorizontal: -16,
  },
  textKonsultasi: {
    fontFamily: Fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
    width: 209,
    marginTop: 30,
  },
  DoctorCategory: {
    flexDirection: 'row',
  },
  lineNews: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
