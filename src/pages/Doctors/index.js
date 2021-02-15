import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {categoryDoctors, doctors, news} from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, Fonts} from '../../utils';

const Doctors = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Text style={styles.textKonsultasi}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.DoctorCategory}>
                <Gap width={16} />
                {categoryDoctors.data.map((item) => {
                  return (
                    <DoctorCategory
                      category={item.doctor}
                      key={item.id}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}

                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Gap height={16} />
          <Text>Top Rated Doctor</Text>
          <Gap height={16} />
          <View>
            {doctors.data.map((item) => {
              return (
                <RatedDoctor
                  key={item.id}
                  name={item.name}
                  specialis={item.specialis}
                  rated={item.rated}
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
              );
            })}
          </View>
          <Gap height={16} />
          <Text>Good News</Text>
          <Gap height={16} />
          <View>
            {news.data.map((item, index) => {
              return (
                <NewsItem
                  title={item.title}
                  time={item.time}
                  index={item.id}
                  key={index}
                />
              );
            })}
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
});
